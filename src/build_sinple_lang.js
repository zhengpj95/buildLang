const fs = require("fs");
let url = "./res/lang_explain.json";

fs.readFile(url, "utf-8", (err, data) => {
	if (err) {
		console.log("读取语言包错误：", err);
		return;
	}

	if (data) {
		writeFile(data);
	}
});

function writeFile(data) {
	if (!data) return;

	// 拼接字符串
	let newData = JSON.parse(data);
	let str = `namespace game {`;
	str = str + `\n\texport const enum Lang {`;

	for (let i in newData) {
		let [k, v] = [newData[i].key, newData[i].value];
		str = str + `\n\t\t/**${v}*/`;
		str = str + `\n\t\t${k} = "${k}",`;
	}

	str += "\n\t}\n}";

	// 写入数据
	fs.writeFile("./output/Lang.ts", str, (err) => {
		if (err) {
			console.log(err);
			console.log(`写入Lang.ts失败`);
			return;
		}
		console.log(`写入Lang.ts成功`);
	});
}
