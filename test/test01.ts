namespace game {
	export const enum ConfigName {
		LangExplain = 'lang_explain.json',
		LangCommon = 'lang_common.json'
	}

	/**
	 * 读取json文件
	 * @param configName string
	 * @param key string
	 * @returns { key: string, value: any }
	 */
	export function getConfigByNameId(configName: string, key: string) {
		let obj: { key: string, value: string; };
		// 读取json文件中key对应的value，赋值给obj
		return obj;
	}

	/**
	 * 获取语言包
	 * 有多个xlsx语言包，最后都合成到 Lang.ts 里
	 * @param key
	 * @param params
	 * @return string
	 */
	export function getLang(key: string, ...params: any[]): string {
		if (!key) {
			return '';
		}

		let keys = key.split('.');
		let filename = keys[0];
		let realKey = keys[1];

		let _file = '';
		let cfg: { key: string, value: string; };
		if (ConfigName.LangExplain.indexOf(filename) >= 0) {
			cfg = getConfigByNameId(ConfigName.LangExplain, realKey);
			_file = ConfigName.LangExplain;
		} else if (ConfigName.LangCommon.indexOf(filename) >= 0) {
			cfg = getConfigByNameId(ConfigName.LangCommon, realKey);
			_file = ConfigName.LangCommon;
		}

		if (!cfg || cfg.key != realKey) {
			console.log(`${_file}中不存在${realKey}`);
			return '';
		}

		let str: string = cfg.value;
		if (params && params.length > 0) {
			for (let i = 0; i < params.length; i++) {
				str = str.replace('%s', params[i]);
			}
		}
		return str;
	}


	// 测试用例
	let str = getLang(Lang.ActCond);// ActCond = "lang_common.ActCond"
	console.log(str); //激活条件

	str = getLang(Lang.PropCntLackTip, 'money');// PropCntLackTip = "lang_common.PropCntLackTip"
	console.log(str); //money不足

}