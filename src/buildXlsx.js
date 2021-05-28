/**
 * 读ts文件中的内容，枚举内容
 * 写入xlsx文件中
 */
var fs = require("fs");
var path = require("path");
var xlsx = require("node-xlsx");

var url = path.join(__dirname, "../res/sourceLang.ts"); //把文件的内容写入xlsx
var obj = {};

// console.log(process.argv);

fs.readFile(url, "utf-8", (err, data) => {
	if (err) {
		console.log(`读写原文件失败！`);
		return;
	}
	let keyArr = [];
	let idx = data.indexOf("	");
	let lastIdx = data.indexOf(" = ");

	let strIdx1 = 0,
		strIdx2 = 0;

	while (idx >= 0) {
		let key = data.slice(idx + 1, lastIdx);
		keyArr.push(key);
		idx = data.indexOf("	", idx + 1);
		lastIdx = data.indexOf(" = ", lastIdx + 1);

		strIdx1 = data.indexOf('= "', strIdx1 + 1);
		strIdx2 = data.indexOf('",', strIdx2 + 1);
		let value = data.slice(strIdx1 + 3, strIdx2);
		obj[key] = value;
	}

	// console.log(obj);
	buildData(obj);
});

function buildData(data) {
	if (!data) {
		return;
	}
	var myData = [
		{
			name: "lang_common",
			data: [
				["键值", "语言"],
				["key", "value"],
				["string", "string"],
				["C", "C"],
			],
		},
	];

	// let newObj = {};
	for (let i in obj) {
		myData[0].data.push([i, obj[i]]);
		// newObj[i] = {
		// 	key: i,
		// 	value: obj[i],
		// };
	}

	// 写入xlsx
	let buffer = xlsx.build(myData);
	fs.writeFile("./output/lang.xlsx", buffer, (err) => {
		if (err) {
			console.log(`写入./output/lang.xlsx文件失败`);
			return;
		}
		console.log(`写入./output/lang.xlsx文件成功`);
	});

	// // 写入json
	// fs.writeFile("./output/lang_common.json", JSON.stringify(obj), (err) => {
	// 	if (err) {
	// 		console.log(`写入./output/lang_common.json失败`);
	// 		return;
	// 	}
	// 	console.log(`写入./output/lang_common.json成功`);
	// });

	// // 写入json
	// fs.writeFile("./output/lang_common2.json", JSON.stringify(newObj), (err) => {
	// 	if (err) {
	// 		console.log(`写入./output/lang_common2.json失败`);
	// 		return;
	// 	}
	// 	console.log(`写入./output/lang_common2.json成功`);
	// });
}
