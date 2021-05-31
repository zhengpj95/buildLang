/**
 * 把json文件写入ts中，以枚举出现
 */
let fs = require("fs");
let path = require("path");

let prefix = "lang_"; //语言包统一前缀
let root = process.argv[2];
root = path.join(root || __dirname, "res");
console.log(root);

function readDirFunc(url) {
	fs.readdir(url, (err, files) => {
		if (err) {
			console.log(`读取目录${url}失败`);
			return;
		}

		let fileList = [];
		for (let item of files) {
			if (item.indexOf(prefix) >= 0) {
				fileList.push(item);
			}
		}
		// console.log("语言包列表：", fileList);
		readFile(fileList, url);
	});
}

/**
 * 排序
 * @param obj
 * @returns {{}}
 */
function sortObj(obj) {
	return Object.keys(obj)
		.sort()
		.reduce((a, v) => {
			a[v] = obj[v];
			return a;
		}, {});
}

function readFile(fileList, baseUrl) {
	if (!fileList || !fileList.length) {
		console.log(`不存在以${prefix}为前缀的json文件`);
		return;
	}

	//所有的语言包都读到此对象里，为了排序
	let obj = {};

	for (let i = 0; i < fileList.length; i++) {
		let url = path.join(baseUrl, fileList[i]);
		let basename = path.basename(url, ".json");
		let file = fs.readFileSync(url, "utf8");
		let data = JSON.parse(file);

		for (let i in data) {
			if (obj[i]) {
				console.log(`${basename}.json 和 ${obj[i]["prefix"]}.json 的 ${i} 重复，请重新命名！！！`);
				return;
			}
			//特殊处理，加上字段prefix，目的就是判断是否存在相同的key，若存在在哪张表中
			data[i]["prefix"] = basename;
			obj[i] = data[i];
		}
	}

	obj = sortObj(obj);
	// console.log(obj);
	writeFile(obj);
}

function writeFile(data) {
	if (!data) return;

	// 拼接字符串

	// // ===enum===
	// let str = `namespace game {`;
	// str = str + `\n\texport const enum Lang {`;
	// for (let i in data) {
	// 	let [k, v, prefix] = [data[i].key, data[i].value, data[i].prefix];
	// 	str = str + `\n\t\t/**${v}*/`;
	// 	//多个xlsx语言包，最后都合成到同一个文件里，所以加前缀区分
	// 	str = str + `\n\t\t${k} = "${prefix}.${k}",`;
	// }
	// str += "\n\t}\n}";

	// ===Object===
	let str = `namespace game {`;
	str = str + `\n\texport const Lang = {`;
	for (let i in data) {
		let [k, v] = [data[i].key, data[i].value];
		v = v.replace(/"/g, `'`);
		str = str + `\n\t\t${k}: "${v}",`;
	}
	str += "\n\t}\n}";

	// 所有的语言包统一写入同一个文件中
	let url = path.join(__dirname, "../output", "Lang.ts");
	fs.writeFile(url, str, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Lang.ts文件写入成功");
		}
	});
}

readDirFunc(root);
