namespace game {
	export const enum Lang {
		/**激活条件*/
		ActCond = "lang_common.ActCond",
		/**活动已结束！*/
		ActivityEndTip = "lang_common.ActivityEndTip",
		/**活动剩余时间*/
		ActivityRemainTime = "lang_common.ActivityRemainTime",
		/**活动时间*/
		ActivityTime = "lang_common.ActivityTime",
		/**1.镶嵌太古源晶即可激活太古源力系统。#N2.太古源晶可以升级，玩家可以通过击杀秘境、幻境BOSS，通关神墓、魔帝陵园获取经验值。后续将会开放更多经验值获取途径。#N3.源晶等级提升将会提供给玩家天赋点，玩家可以消耗一定天赋点激活源力天赋。#N4.玩家激活了一个区域的所有天赋点后，将开启对应的镶嵌孔，可以镶嵌源力水晶。#N5.玩家战力会以一定的比例转化为源力，转化比例随着水晶等级的提升而提升，太古源力中源力将成为战斗力标准，源力越高，优势越大。后续将开放更多太古源力相关玩法。#N6.源力装备、激活天赋、镶嵌源力水晶将提供给玩家额外的源力。源力装备、源力水晶将在后续版本中上线。*/
		Archaic = "lang_explain.Archaic",
		/**攻击*/
		Atk = "lang_common.Atk",
		/**属性*/
		Attr = "lang_common.Attr",
		/**自动购买*/
		AutoBuy = "lang_common.AutoBuy",
		/**秒后自动战斗*/
		AutoFight = "lang_common.AutoFight",
		/**秒后自动加入*/
		AutoJoin = "lang_common.AutoJoin",
		/**1.至少需上阵一个战御仙灵才可进行匹配#N2.活动产出战御仙灵升级材料【咒魂符】#N3.活动结束后，进入道具【咒魂符】将回收，请尽早使用#N4.购买特权卡可激活对应特权，活动结束后特权卡功能将取消*/
		AvenueSoulDesc = "lang_explain.AvenueSoulDesc",
		/**1.榜单为个人上榜排名，每5分钟刷新一次#N2.活动结束当日23点结算，请留意活动时间#N3.活动结束后，进入道具【咒魂符】将回收，请尽早使用#N4.奖励以邮件形式发放*/
		AvenueSoulRank = "lang_explain.AvenueSoulRank",
		/**1.神兽榜是关联神兽系统的主题榜单，需激活神兽才可参与排名#N2.神兽榜通过消耗神兽大养丹计算排名积分#N3.榜单会在结算当日晚上11点截止排名，结束后不在计算积分#N4.排行榜每5分钟刷新一次*/
		BeastRank = "lang_explain.BeastRank",
		/**已绑定*/
		Binded = "lang_common.Binded",
		/**1活动为限时玩法，活动结束后的乱斗积分和大乱斗门票都会回收，请尽早使用。#N2.每一层只能选择一个宝藏或治疗，选择后其余位置不可选择，每次战斗结束后双方的生命值无法自动恢复。#N3.选择宝藏有一定几率跳过战斗获得奖励，治疗可以回复队伍的生命值。#N4.每层通过后可选择全队BUFF加成。#N5.乱斗积分可以在乱斗商店中兑换物品。#N6.消耗门票可进行重置，重置后从第一层重新开始挑战。#N7.排行榜积分与兑换积分分别计算。*/
		BuddyBattle = "lang_explain.BuddyBattle",
		/**花费#Y%s%s#end购买#G%s#end*/
		BuyConfirmContent = "lang_common.BuyConfirmContent",
		/**1.个人榜为跨服榜单，根据猫妖等级进行排名#N2.榜单每5分钟刷新一次#N3.罐头可大幅提升养猫效果，强烈推荐#N4.活动结束当天23点进行结算，过后不再计算积分#N5.活动结束后猫妖升级材料和罐头效果将回收，请及时使用#N6.奖励以邮件形式发放*/
		CatDemonRankDesc1 = "lang_explain.CatDemonRankDesc1",
		/**1.战队榜以战队形式排名#N2.排名奖励将以战队为单位发放，战队内所有人均一样#N3.离开团队时将移除对应积分，加入战队则增加对应积分#N4.活动结束当天23点进行结算，过后不再计算积分#N5.奖励以邮件形式发放*/
		CatDemonTeamDesc = "lang_explain.CatDemonTeamDesc",
		/**技能冷却*/
		Cdredrate = "lang_common.Cdredrate",
		/**1.在商场处充值仙玉可获得赠送的【%s】#N2.发放【%s】可获得%s积分，参与%s榜#N3.充值额度越高，发放的%s内的金钱越多#N4.结榜后发放%s将无法获得积分（活动结束当天23：00结榜）#N5·发放%s条件为SVIP3级及以上并且4转及以上*/
		CharegeRedPacket = "lang_explain.CharegeRedPacket",
		/**攻击力*/
		ChessAtk = "lang_common.ChessAtk",
		/**生命*/
		ChessHp = "lang_common.ChessHp",
		/**速度*/
		ChessSpeed = "lang_common.ChessSpeed",
		/**超神一击*/
		Chitdamrate = "lang_common.Chitdamrate",
		/**超神一击率*/
		Chitrate = "lang_common.Chitrate",
		/**1.#Y%s#end正向你发起结盟申请。#N2.成功结盟后，本周内将无法#Y变更#end盟友。结盟关系在第三阶段结束时自动解除。#N3.结盟后，在战场中将显示为#Y黄色#end的盟友关系。#N4.进攻盟友时，将弹出#Y二次确认#end提示。#N5.活动#Y进行时#end达成的联盟，将在#Y下阶段活动时#end生效。#N6.第三阶段结束时，会根据成绩，按照#Y一定规则#end发放#Y结盟奖励#end。*/
		CityWarAgreeAlly = "lang_explain.CityWarAgreeAlly",
		/**1.你正向#Y%s#end发起结盟申请。#N2.成功结盟后，本周内将无法#Y变更#end盟友。结盟关系在第三阶段结束时自动解除。#N3.结盟后，在战场中将显示为#Y黄色#end的盟友关系。#N4.进攻盟友时，将弹出#Y二次确认#end提示。#N5.活动#Y进行时#end达成的联盟，将在#Y下阶段活动时#end生效。#N6.第三阶段结束时，会根据成绩，按照#Y一定规则#end发放#Y结盟奖励#end。*/
		CityWarApplyAlly = "lang_explain.CityWarApplyAlly",
		/**1.领地争夺战排名分为#G个人占城排行#end与#G宗门功勋排行#end
·#G个人占城#end排行根据活动结束时，玩所处城池等级排名；
·#G宗门功勋#end排行根据活动结束时，宗门总功勋进行排名；#N2.当天活动结束，会通过#G邮件#end发放#G个人排名奖励#end与#G宗门排名奖励#end；#N3.活动奖励中获得的#G荣誉#end，可在#G领地商店#end兑换奖励;#N4.#G未参加活动#end的玩家#G无法#end获得排名奖励。*/
		CityWarRank = "lang_explain.CityWarRank",
		/**件*/
		CntJian = "lang_common.CntJian",
		/**1.开学日记一共有#G62个#end文字，每收集1个文字，就会在日记中#G点亮#end。#N2.集齐#G全部62个不同#end的文字，可#G激活1次日记#end，记录#G1次#end收集次数。#N3.激活日记会#G消耗62个不重复#end的文字。#N4.多余的文字可通过战队字库#G与同战队#end的玩家进行交换。#N5.#G活动结束#end后会根据#G收集进度#end发放对应的奖励。*/
		CollectWords = "lang_explain.CollectWords",
		/**敬请期待！*/
		ComingSoon = "lang_common.ComingSoon",
		/**点击其他区域关闭*/
		CommonCloseTip = "lang_common.CommonCloseTip",
		/**战力*/
		CommonPowerTitle = "lang_common.CommonPowerTitle",
		/**铜钱不足*/
		CopperNotEnough = "lang_common.CopperNotEnough",
		/**消耗*/
		Cost = "lang_common.Cost",
		/**数量*/
		Count = "lang_common.Count",
		/**1.疯狂宝箱为限时开放的抽奖活动，开服12天以上的区服都可以参加#N2.玩家获得朴素、秘银、水晶三种宝箱后，消耗对应的钥匙可以开启宝箱，随机获得宝箱奖励#N3.玩家获得的宝箱、钥匙道具不会进入道具背包，玩家可以在活动界面看到剩余数量哦#N3.开启宝箱必定掉落材料奖励，还有机会获得神秘大礼、水晶宝箱、水晶钥匙！#N4.开启宝箱获得的奖励将发送至活动背包，需要请自行取出，活动结束后未领取的奖励将通过邮件发送#N5.活动结束后将回收所有的宝箱、钥匙，请玩家尽快使用！*/
		CrazyBox = "lang_explain.CrazyBox",
		/**1.宝箱榜是关联疯狂宝箱的主题榜单，通过消耗疯狂宝箱的钥匙道具进行抽奖即可获得排行榜积分#N2.根据宝箱的不同，消耗不同的钥匙获得的积分也不同，越高级的宝箱，抽奖获得的积分越多#N3.左上角展示排行榜截止时间，倒计时结束后，消耗道具也不再计入积分排行#N4.排行榜每5分钟刷新一次#N5.排行榜奖励将在活动结束后通过邮件发放*/
		CrazyBoxRank = "lang_explain.CrazyBoxRank",
		/**暴击伤害*/
		Crdamrate = "lang_common.Crdamrate",
		/**声望收益*/
		Creditrate = "lang_common.Creditrate",
		/**暴击*/
		Crit = "lang_common.Crit",
		/**暴击率*/
		Critrate = "lang_common.Critrate",
		/**当前属性*/
		CurAttr = "lang_common.CurAttr",
		/**当前挑战*/
		CurChallenge = "lang_common.CurChallenge",
		/**当前效果*/
		CurEff = "lang_common.CurEff",
		/**当前积分*/
		CurIntegral = "lang_common.CurIntegral",
		/**本服排名*/
		CurServerRank = "lang_common.CurServerRank",
		/**1.玩家赠予灵宠灵草可获得丰厚奖励。#N2.每次赠予可获得灵宠的羁绊值，当羁绊值达到最大值时，将获得灵宠。#N3.玩家可以选择不同的灵宠进行赠予，每次更换灵宠都换清空羁绊值。#N4.天灵殿每次赠予都能获得积分参与天灵榜的排名。*/
		DaySweet3 = "lang_explain.DaySweet3",
		/**减少伤害*/
		Decrate = "lang_common.Decrate",
		/**防御*/
		Def = "lang_common.Def",
		/**1.战队榜根据同战队所有人积分进行计算#N2.榜单5分钟刷新一次#N3.活动结束当日23点进行结算，请留意活动时间#N4.地王徽章活动结束后将回收，请及时使用#N5.奖励以邮件形式发放*/
		DiWangTeamRankDesc = "lang_explain.DiWangTeamRankDesc",
		/**神威降临*/
		Div1rate = "lang_common.Div1rate",
		/**神威持续*/
		Div1time = "lang_common.Div1time",
		/**神威降临*/
		Div2rate = "lang_common.Div2rate",
		/**神威持续*/
		Div2time = "lang_common.Div2time",
		/**神威降临*/
		Div3rate = "lang_common.Div3rate",
		/**神威持续*/
		Div3time = "lang_common.Div3time",
		/**闪避*/
		Dodge = "lang_common.Dodge",
		/**闪避率*/
		Dorate = "lang_common.Dorate",
		/**1.斗尊为跨服玩法，每次需进行3场战斗。#N2.需要先进行布阵之后才可参加，采用石头剪刀布克制形式，灵宠和神兽为石头，侍女为布，武神为剪刀，每一场只能上其中一个类型#N3.可随时更换阵容配置#N4.当双方同场中出的为同一类型时，如都是出阵灵宠的石头，则总战力高一方获胜#N5.根据胜负获得不同积分，连胜可获得额外积分#N6.总积分可用于排行榜排名，兑换奖励消耗的积分不会从排行榜的总积分中扣除#N7.活动为限时玩法，活动结束后斗尊积分和斗尊柬都会回收，请尽早使用。*/
		DouZun = "lang_explain.DouZun",
		/**1.斗尊榜为斗尊玩法对应榜单，以斗尊总积分进行排名#N2.斗尊榜会在斗尊活动结束前1小时提前结榜，结榜后不再计算积分#N3.榜单奖励将以邮件形式发放#N4.榜单排名每5分钟刷新一次*/
		DouZunRank = "lang_explain.DouZunRank",
		/**1.祈福龙珠为限时性活动，每次开放奖励都会进行更换#N2.可在活动中使用祈福龙魂激活龙珠，每激活一颗龙珠都可获取一次奖励#N3.祈福龙魂可在活动中获得，请关注当天活动#N4.点亮七颗龙珠后可召唤一次神龙进行许愿，可获得一次大奖奖励，无须消耗任何道具#N5.许愿完毕后七颗龙珠熄灭，需要再次点亮七颗龙珠才可进行下一次的召唤神龙#N6.背包空间不足时，奖励将会通过邮件发放*/
		DragonBallRule = "lang_explain.DragonBallRule",
		/**神龙一击伤害*/
		Dragon_extdmg = "lang_common.Dragon_extdmg",
		/**神龙一击增伤*/
		Dragon_imprate = "lang_common.Dragon_imprate",
		/**神龙一击率*/
		Dragon_rate = "lang_common.Dragon_rate",
		/**已生效*/
		Effective = "lang_common.Effective",
		/**结束*/
		End = "lang_common.End",
		/**经验收益*/
		Exprate = "lang_common.Exprate",
		/**双倍奖励勾选后，仙童将会在11:00~11:30,23：00~23:30这两个时间段参与历练*/
		FCExperienceRule = "lang_explain.FCExperienceRule",
		/**仙装被爆概率减少*/
		Faerie_war_die_no_drop = "lang_common.Faerie_war_die_no_drop",
		/**失败*/
		Failed = "lang_common.Failed",
		/**1.召唤天机·卢昌可替代您参加世界boss#N2.天机·卢昌星级越高，可获得的世界boss奖励越好#N3.初次召唤天机·卢昌前请先手动参加一次世界boss为仙童做示范，召唤仙童后才可获得世界boss排名相关奖励#N4.您在线时仙童会自动参与世界boss，您离线若超过一定时间，仙童缺乏监督将偷懒停止参加，建议定时上线督促仙童，另外提升仙童星级可将仙童偷懒时间推后，推荐尝试*/
		Fairchild215101 = "lang_explain.Fairchild215101",
		/**1.召唤天闲·纪丙可代替您每日定时参加妖魔入侵#N2.纪丙星级越高，妖魔入侵收益越高，选择的高品质BOSS概率也越大#N3.您需要定期上线监督仙童，过长时间不上线，仙童会偷懒不再参与妖魔入侵#N4.仙童提升到一定星数以上，还可以选择让仙童在帮你购买额外仙魔令，提升收益*/
		Fairchild215102 = "lang_explain.Fairchild215102",
		/**1.召唤天罡·黄真可以代替您每日定时参加战队吃鸡#N2.黄真星级越高，参与战队吃鸡获得的奖励也越好#N3.您需要定期上线监督仙童，过长时间不上线，仙童会偷懒不再参与战队吃鸡#N4.仙童召唤期间您无法参与战队吃鸡，您需要召回仙童才能手动参与战队吃鸡*/
		Fairchild215103 = "lang_explain.Fairchild215103",
		/**1.天勇·姚公孝可替代参加百服大战#N2.根据姚公孝的星级决定每次召唤可参加的天数，初始为1天，最高3天，参加结束需要重新召唤才可继续参加后面赛程，请注意天数限制#N3.初次召唤姚公孝前请先手动参加一次百服大战所有赛程为仙童做示范，之后仙童才可为您代为参赛#N4.仙童第一天赛程会根据星级决定可额外购买的次数#N5.第二、三天赛程能获取的积分上限受限于仙童星级，提升到最高可无上限要求*/
		Fairchild215104 = "lang_explain.Fairchild215104",
		/**1.召唤地英·孙祥可替代您参加王者争霸#N2.地英·孙祥星级越高，自动购买挑战次数越多#N3.您在线时仙童会自动参与王者争霸，您离线若超过一定时间，仙童缺乏监督将偷懒停止参加，建议定时上线督促仙童，另外提升仙童星级可将仙童偷懒时间推后，推荐尝试#N4.自动购买可手动关闭，自动购买挑战次数优先消耗元宝，当您元宝不足时会消耗仙玉*/
		Fairchild215201 = "lang_explain.Fairchild215201",
		/**1.召唤地勇·贾成可代替您每日定时参加历练#N2.贾成星级越高，历练收益和历练时间越多#N3.您需要定期上线监督仙童，过长时间不上线，仙童会偷懒不在进行历练#N4.仙童提升到一定星数以上，还可以选择让仙童在双倍时间再进行历练，提升收益*/
		Fairchild215202 = "lang_explain.Fairchild215202",
		/**1.召唤仙童可代替您每日定时参加魔帝陵园#N2.仙童的星级越高，魔帝陵园中参与层数和追回天数越多#N3.当已通关最高层数#G小于#end仙童星级对应层数时，仙童会帮您自动达到历史最高层数。#N4.当已通关最高层数#R大于#end仙童星级对应层数时，仙童只能达到其对应星级的层数。#N5.您需要定期上线监督仙童，过长时间不上线，仙童会偷懒不再参与魔帝陵园*/
		Fairchild215203 = "lang_explain.Fairchild215203",
		/**1.召唤仙童可代替您每日定时参加神墓历险#N2.仙童的星级越高，神墓历险中参与层数和追回天数越多#N3.当已通关最高层数#G小于#end仙童星级对应层数时，仙童会帮您自动达到历史最高层数。#N4.当已通关最高层数#R大于#end仙童星级对应层数时，仙童只能达到其对应星级的层数。#N5.您需要定期上线监督仙童，过长时间不上线，仙童会偷懒不再参与神墓历险*/
		Fairchild215204 = "lang_explain.Fairchild215204",
		/**1.地威·须成可为您保留仙缘副本未参与次数。#N2.须成星级越高，保留天数和次数越多。#N3.须成将会帮您召唤您和伴侣的分身自动参与仙缘副本并获得奖励，优先消耗当天的仙缘副本次数。#N4.初次激活地威·须成后，您需要参与一次仙缘副本为须成做示范。#N5.须成获得的奖励将为您保管到仙童背包中。*/
		Fairchild215205 = "lang_explain.Fairchild215205",
		/**1.须成将会帮您召唤您和伴侣的分身自动参与仙缘副本并获得奖励#N2.消耗领取次数同时也会优先消耗当天的仙缘副本次数。#N3.须成获得的奖励将为您保管到仙童背包中。*/
		FairchildMarry = "lang_explain.FairchildMarry",
		/**1.点击领取后，消耗仙童找回次数#N2.奖励领取层数为最高记录和仙童到达层数的最小值#N3.领取奖励后仙童可帮你扫荡到对应层数，后续您可继续手动通关。#N4.若您放弃本次手动操作，则会放弃本次次数，同时可开启下一次扫荡。#N5.每天扫荡仅限两次手动操作的机会，两次之后，只能扫荡，不能手动进入*/
		FairchildMoDi = "lang_explain.FairchildMoDi",
		/**勾选将在召唤仙童后自动预扣除对应购买次数的仙玉，取消召唤将返还对应仙玉。*/
		FairyChildBaiFuRule = "lang_explain.FairyChildBaiFuRule",
		/**1.仙童榜是以玩家活动期间完成仙童指令任务获得仙童积分为排名依据#N2.任务难度越高获得的仙童积分越高#N3.相同积分按积分变更时间先后进行排名#N4.排行榜左上角将显示排行截止时间，一旦倒计时结束，不再计算积分上榜#N5.排行榜结榜时间为23：00，敬请留意排行榜剩余时间#N6.榜单结束后奖励将以邮件形式发放，请留意邮箱容量，及时清理过期邮件*/
		FairyChildOrderRankDesc = "lang_explain.FairyChildOrderRankDesc",
		/**1.仙女榜是关联仙女系统的主题榜单，需激活仙女才可参与排名#N2.仙女榜通过消耗仙女灵能丹计算排名积分#N3.榜单会在结算当日晚上11点截止排名，结束后不再计算积分#N4.排行榜每5分钟刷新一次*/
		FairyRank = "lang_explain.FairyRank",
		/**1.仙童指令是限时任务类玩法，完成指定任务可获得对应奖励#N2.任务难度越高获得的仙童积分和仙童令牌数量越高#N3.任务将会%s小时刷新一次#N4.可使用仙童神笔刷新所有任务，任务自动刷新时间将会重新计时#N5.完成对应任务后，奖励将会自动发放到背包#N6.活动结束后仙童积分和仙童神笔将会回收清零，请留意活动时间*/
		FairychildOrder = "lang_explain.FairychildOrder",
		/**灵宝暴伤*/
		Fbcritdam = "lang_common.Fbcritdam",
		/**灵宝暴击率*/
		Fbcritrate = "lang_common.Fbcritrate",
		/**灵宝伤害*/
		Fbdam = "lang_common.Fbdam",
		/**灵宝伤害*/
		Fbdamrate = "lang_common.Fbdamrate",
		/**灵宝无视防御*/
		Fbrealdam = "lang_common.Fbrealdam",
		/**女性*/
		Female = "lang_common.Female",
		/**1.凤凰涅槃中获得的积分，可计入奖励槽中#N2.奖励槽中有不同档位奖励，每次根据积分，领取当前最高可领取的那一档奖励，每次领取后所有积分将清零重新计算，请注意积分和档位再领取#N3.奖励槽满后将不再可获得积分，请注意积分溢出#N4.激活特权卡后，奖励槽中积分满后可继续累积，同时每次领取奖励只会扣除该次领取所需的积分，其余积分不会回收#N5.积分将在活动结束后统一清零，请尽早兑换#N6.活动结束后，炎晶道具将回收，请尽早使用*/
		Fenghuang = "lang_explain.Fenghuang",
		/**1.活动为跨服排名，左上角截止时间结束后，将停止计算排名，请留意时间#N2.活动将在结束当晚11点结算#N3.活动结束后奖励以邮件形式发放*/
		FenghuangRank = "lang_explain.FenghuangRank",
		/**1.战旗争夺需2-4人组队进行。#N2.获得战旗时间越久越容易胜出。#N3.夺旗，持有战旗，击杀敌人均能获得一定贡献，贡献在结算时可按一定比例兑换成巅峰积分。#N4.每天12-14时、20-22时内开启双倍巅峰积分活动。*/
		FightFlag = "lang_explain.FightFlag",
		/**火攻*/
		Fire_atk = "lang_common.Fire_atk",
		/**火系伤害减免*/
		Fire_decrate = "lang_common.Fire_decrate",
		/**火防*/
		Fire_def = "lang_common.Fire_def",
		/**火系伤害增加*/
		Fire_imprate = "lang_common.Fire_imprate",
		/**1.本烟花寻宝为跨服玩法，寻宝所消耗的元宝会进入元宝池中；#N2.每寻宝1次获得10点烟花值，烟花值达标即可获得达标烟花宝箱奖励；#N3.烟花宝箱在满足条件后，最多可领取双倍的宝箱奖励；#N4.每天有1次免费寻宝次数，每晚0点刷新；#N5.寻宝可获稀有奖励及兑换道具，更有机会直接领取奖池中的元宝大奖；#N6.当期活动结束后烟花值将清零重置，烟花宝箱奖励请及时领取，活动结束后烟花宝箱中未领取奖励只能获得基础（单倍）奖励；#N7.10连、50连出有更大机会获得稀有奖励；#N8.每日烟花寻宝跨服所有玩家最多进行10万次。*/
		FireworksDraw = "lang_explain.FireworksDraw",
		/**1.本庆典寻宝为跨服玩法，寻宝所消耗的仙玉会进入仙玉池中；#N2.每寻宝1次获得10点庆典值，庆典值达标即可获得达标庆典宝箱奖励；#N3.庆典宝箱在满足条件后，最多可领取双倍的宝箱奖励；#N4.每天有1次免费寻宝次数，每晚0点刷新；#N5.仙玉寻宝比元宝寻宝可获更稀有的奖励及兑换道具，更有机会直接领取奖池中的仙玉大奖；#N6.当期活动结束后庆典值将清零重置，庆典宝箱奖励请及时领取，活动结束后庆典宝箱中未领取奖励只能获得基础（单倍）奖励；#N7.10连、50连出有更大机会获得稀有奖励；#N8.每日庆典寻宝跨服所有玩家最多进行10万次。*/
		FireworksXyDraw = "lang_explain.FireworksXyDraw",
		/**1.活动期间，不可改变性别（可以改名）。#N2.只有#G女性#end可以上榜，可以#G给自己送活动道具#end，自己可以成为自己的守护者。#N3.左上角展示排行榜截止时间，一旦#G倒计时结束，赠送道具将不再计入排行#end。#N4.活动结束后，奖励将以#G邮件#end形式在#G次日零点#end开始发放。#N5.每个名次，#G只有前2名的守护者#end才可获得#G守护者奖励#end。*/
		FlowerRank = "lang_explain.FlowerRank",
		/**1.榜单为锻仙炉配套榜单，以个人总积分排#N2.榜单将在活动结束当晚23点结榜，结榜后不再计算积分#N3.奖励将以邮件形式发放#N4.榜单每5分钟刷新一次#N5.活动结束后锻仙值将回收，请尽早使用*/
		ForgingGodDesc = "lang_explain.ForgingGodDesc",
		/**免费*/
		Free = "lang_common.Free",
		/**1.装备可附魔的附魔卷等阶不可超过角色转生等阶。#N2.根据附魔卷品质，分为蓝、紫、橙、红，品质越高的附魔卷其附加属性和战力越高。#N3.每种类型的附魔卷装备只可附魔一次；附魔相同类型的附魔卷时，需先将之前的剥离。#N4.相同类型且同品质的附魔卷可以合成后升级成一下阶附魔卷。#N5.附魔卷可以在伏魔塔中挑战BOSS胜利后获得，并可每日扫荡通关层数。*/
		FuMo = "lang_explain.FuMo",
		/**满员自动战斗*/
		FullAutoFight = "lang_common.FullAutoFight",
		/**功能暂未开放！*/
		FuncNotOpen = "lang_common.FuncNotOpen",
		/**获取途径*/
		GainSrc = "lang_common.GainSrc",
		/**1.该玩法以战队形式进行，同战队所有人均可参加#N2.每种奖励每次重置后只能获得1次#N3.奖池内奖励在全部抽取后会自动进行重置*/
		GashaponRule = "lang_explain.GashaponRule",
		/**获得奖励*/
		GetRew = "lang_common.GetRew",
		/**获得*/
		GetShort = "lang_common.GetShort",
		/**已领取*/
		Getted = "lang_common.Getted",
		/**1.超值秒杀后5天内每天都可直接领取三大礼包#N2.当日先进行8元秒杀再购买超值秒杀从次日开始计算天数领5天礼包#N3.购买5日秒杀礼包5天后，可再次进行购买#N4.所有秒杀礼包每日限购一次，每晚0点重置*/
		GiftBigBagDes = "lang_explain.GiftBigBagDes",
		/**1.消耗铜币进行领悟，足够领悟5次时，优先领悟5次#N2.每次领悟均可概率获得天书当中某个天书字#N3.当每个天书字的获取数量满足条件时，可以进阶，进阶后增加属性战力#N4.当前天书领悟至满阶后，可以激活下一部天书*/
		GodBookRule = "lang_explain.GodBookRule",
		/**1、激活任意一个神冕即可获得四倍返利充值特权，充值任一档位金额都将获取额外的3倍仙玉奖励#N2、四倍返利不可以和首充双倍效果叠加，消耗四倍返利机会不会消耗首充双倍效果#N3、使用一次四倍返利机会后，会进入返利倒计时，累计充值达到%s元可以减少%s小时倒计时时间#N4、累计充值仅限于档位直充，直购礼包和特权卡消费不计算在内*/
		GodDownTip = "lang_explain.GodDownTip",
		/**1.神座战争为跨服多人玩法，活动时间内满足条件的玩家可以进入战场#N2.活动开启时间为每周三、五、日13:45~14:00，19:45~20:00#N3.每周周日最后一场活动结束后将回收所有活动道具和信仰值，不可继承到下周，请玩家注意使用时间#N4.进入战场后，根据玩家神转等级、拥有神冕和神座装备初始拥有一定数量的骰子，摇动骰子获得点数后向前移动#N5.本玩法每周日在最后一场结束后5分钟内进行结算，根据排名参与的玩家都将获得排名奖励，奖励以邮件形式发放*/
		GodWarRule = "lang_explain.GodWarRule",
		/**武神暴伤*/
		Godcritdam = "lang_common.Godcritdam",
		/**武神暴击率*/
		Godcritrate = "lang_common.Godcritrate",
		/**武神伤害*/
		Goddam = "lang_common.Goddam",
		/**武神伤害*/
		Goddamrate = "lang_common.Goddamrate",
		/**武神真伤*/
		Godrealdam = "lang_common.Godrealdam",
		/**元宝不足*/
		GoldNotEnough = "lang_common.GoldNotEnough",
		/**金攻*/
		Gold_atk = "lang_common.Gold_atk",
		/**金系伤害减免*/
		Gold_decrate = "lang_common.Gold_decrate",
		/**金防*/
		Gold_def = "lang_common.Gold_def",
		/**金系伤害增加*/
		Gold_imprate = "lang_common.Gold_imprate",
		/**1.榜单以琴瑟共鸣积分进行排名#N2.夫妻共同上榜，若玩家未结婚上榜，则可额外获得配偶那部分的奖励#N3.活动在结束当日23点结算#N4.活动结算后将不可在操作#N5.活动道具将在活动结束后回收，请尽早使用*/
		GongmingBang = "lang_explain.GongmingBang",
		/**1.鸿运签筒为限时性抽奖活动#N2.一共有6根竹签，每天完成对应额度的充值可获得一次摇签机会#N3.每天获得摇签机会具有上限并且可以隔天累计#N4.完成所有的摇签不可继续抽奖，充值也不再获得额外次数*/
		GoodLuckyLot = "lang_explain.GoodLuckyLot",
		/**1.锻造仙炉可获得锻仙值，锻仙值可用于雇佣其他仙友协助和兑换奖励;#N2.协助锻造仙炉的人越多，收益越高;#N3.可通过向协助者发放锻仙值来加速锻造;#N4.需要购买特权卡才可雇佣他人，否则只能邀请战队朋友义务帮忙;#N5.活动物品和锻仙值在活动结束后将回收，请留意活动时间尽早使用;#N6.榜单结束时，还在锻造的仙炉会按已消耗的时间来获得一定锻仙值并计入总积分中*/
		GorgingGodFurnaceTip = "lang_explain.GorgingGodFurnaceTip",
		/**等级*/
		GradeLv = "lang_common.GradeLv",
		/**1.圣杯一共具有五个阶段，容器圣杯—初生圣杯—丰足圣杯—充盈圣杯—溢满圣杯。#N2.当前阶段的圣杯达到最大等级后，需要消耗10个圣杯令咒进行突破。#N3.圣杯令咒需要使用圣杯令咒点亮，随着圣杯阶段的提升，点亮一个咒印所需要的令咒也会提升。#N4.每个阶段最多只能点亮10个咒印。#N5.激活圣杯时，圣杯会初始生成1个圣杯悬赏，完成悬赏会得到圣杯的材料奖励，提示圣杯的阶段或者激活圣杯皮肤可增加悬赏数量。#N6.圣杯悬赏具有时间限制，逾期的悬赏需要则无法继续完成，需要重新刷新，但不会产生任何消耗。#N7.圣杯悬赏在刷新或重新接取时有几率会得到稀有悬赏，稀有悬赏会得到更高的奖励。#N8.圣杯悬赏可进行锁定，锁定中的悬赏将会暂停时间的倒计时并且不计算任何的任务进度，请合理使用*/
		GrailRule = "lang_explain.GrailRule",
		/**1.团购榜是一个跨服排行榜单，通过在超值团购募集团购券可获得团购积分#N2.在超值团购中获取一次团购大礼可获得额外的团购积分，仙友团第一名的玩家可双倍获取积分，募集的团购券越多，团购开奖人数越多，中奖几率也越高#N3.团购榜界面左上角展示排行榜截止时间，一旦倒计时结束，则不再计入积分排行*/
		GroupBuying = "lang_explain.GroupBuying",
		/**1.团购大礼必须满足目标团购券数目才会进行发放奖励，若不满足则不开奖；#N2.每满足1次目标团购券的值可增加1名开奖人数；#N3.当开奖人数等于1时，开奖时只发放仙友团第一名的玩家,当开奖人数大于1时，开奖时第一名玩家必得团购大奖，剩余名额从其他名次的玩家中产生，团购券数越多，中奖几率越高；#N4.团购大礼在每天的22:40分进行结算，停止参团，22:50分正式发放奖励。*/
		GroupTeamBuy = "lang_explain.GroupTeamBuy",
		/**1.仙盟逐鹿在每周二、周六晚9点40分举行，活动以区服为单位，时长为20分钟。#N2.所有区服都需要经过征讨阶段，才可进入争夺阶段，若提前完成征讨阶段可提前键入争夺阶段。#N3.在争夺阶段中击杀其他玩家，争夺地图中的资源均可获得仙盟积分。#N4.活动结束后根据仙盟积分排名结算奖励，需要参与过活动的玩家才可获得奖励。#N5.活动中杀敌数最多的玩家评为仙盟之光，各区服杀敌数最多的评为区服最佳，均可获得额外奖励。#N6.活动结算奖励均以邮件的形式进行发放。*/
		GuildMatch = "lang_explain.GuildMatch",
		/**已激活*/
		HasActive = "lang_common.HasActive",
		/**已结束*/
		HasFinished = "lang_common.HasFinished",
		/**已击杀*/
		HasKill = "lang_common.HasKill",
		/**已开启*/
		HasOpen = "lang_common.HasOpen",
		/**拥有*/
		Have = "lang_common.Have",
		/**命中*/
		Hit = "lang_common.Hit",
		/**命中率*/
		Hitrate = "lang_common.Hitrate",
		/**圣兵阁需要*/
		HolyCenterCond = "lang_common.HolyCenterCond",
		/**生命*/
		Hp = "lang_common.Hp",
		/**1.以战队为单位培养幻灵麒麟，通过投喂道具增加麒麟灵力值#N2.战队培养幻灵麒麟灵力值越高，奖励越丰厚#N3.百年老参增加麒麟10点灵力值，千年灵芝增加麒麟灵力值80点#N4.当您离开团队时将移除对应灵力值，加入战队则增加对应灵力值#N5.活动时间将在结束当天23点结束，届时无法继续投喂，敬请留意活动时间#N活动结束后幻灵麒麟的投喂道具将回收，请及时使用*/
		HuanLingRank = "lang_explain.HuanLingRank",
		/**1.掌门每日#G0点#end起、长老每日#G8点#end起可激活荒神界，每日#G23点#end荒神界将会被封印。#N2.掌门激活荒神界，本服玩家在副本内可获得#GBUFF加成#end。#N3.荒神界一共#G60层#end，每层挑战时间为#G2分钟#end，从#G第一个#end玩家进入该层数中开始计时。#N4.BOSS血量为#G全服共享#end，2分钟内击杀BOSS可挑战#G下一层#end，若2分钟内#R没有#end击杀BOSS，则挑战#R失败#end，荒神界将会被#R提前#end封印。#N5.每层奖励分为#G3档#end，普通奖励，参与奖励与MVP奖励，普通能领取#G2个#end奖励，参与能领取#G3个#end奖励，MVP能领取#G4个#end奖励。*/
		HuangShenJie = "lang_explain.HuangShenJie",
		/**伤害*/
		Hurt = "lang_common.Hurt",
		/**增加伤害*/
		Imprate = "lang_common.Imprate",
		/**积分*/
		Integral = "lang_common.Integral",
		/**1、%s是一个跨服排行榜单，通过每天设定一个消费主题，玩家在活动期间消费该物品，即可计算积分参加排行，奖励将在活动结束后通过邮件发放。#N2、%s界面左上角将展示排行截至时间，一旦倒计时结束，消费主题道具将不再计入积分排行。#N3、每天的主题与奖励都可能发生变化，请以当天实际活动为准。#N4.排行榜每5分钟刷新一次。*/
		IntegralRank = "lang_explain.IntegralRank",
		/**1.相同类型剑纹只能佩戴1个。#N2.核心剑纹只能镶嵌在剑身指定槽位。#N3.槽位随#R深渊剑冢#end通关层数解锁。#N4.多余剑纹可分解成剑纹精华，用于升级已镶嵌剑纹。#N5.三个同品质剑纹可合成1个稀有剑纹。*/
		JianWen = "lang_explain.JianWen",
		/**境界需要*/
		JingjieCond = "lang_common.JingjieCond",
		/**立即参与*/
		JoinNow = "lang_common.JoinNow",
		/**尊皇攻击*/
		Juvenia_atk = "lang_common.Juvenia_atk",
		/**尊皇伤害减免*/
		Juvenia_decrate = "lang_common.Juvenia_decrate",
		/**尊皇防御*/
		Juvenia_def = "lang_common.Juvenia_def",
		/**尊皇伤害加成*/
		Juvenia_imprate = "lang_common.Juvenia_imprate",
		/**层*/
		Layer = "lang_common.Layer",
		/**重*/
		LayerChong = "lang_common.LayerChong",
		/**离开界面仍处在匹配队列，进入其他副本将\n自动取消匹配\n是否离开？*/
		LeaveFuBen = "lang_common.LeaveFuBen",
		/**1.天命之路一共有#G100层#end全部完成将#G重置#end回#G第1层#end。#N2.每完成一定的阶段能领取#G阶段奖励#end。#N3.每经过一个格子#G都会#end获得对应格子的奖励。#N4.每天有#G25次#end的投骰次数，黄金骰子#G不消耗#end此次数。#N5.每周一0点会#G重置#end一次玩家#G所在层数#end的进度。#N6.若掷出的点数#G大于#end当前层数的#G剩余步数#end，多余的点数视为#G无效#end停留在下一层的#G起点#end，#G不会#end继续前进。*/
		LifeWay = "lang_explain.LifeWay",
		/**本次登陆不再提示*/
		LoginNoTip = "lang_common.LoginNoTip",
		/**级*/
		Lv = "lang_common.Lv",
		/**等阶*/
		LvStage = "lang_common.LvStage",
		/**侍女暴伤*/
		Maidcritdam = "lang_common.Maidcritdam",
		/**侍女暴击率*/
		Maidcritrate = "lang_common.Maidcritrate",
		/**侍女伤害*/
		Maiddam = "lang_common.Maiddam",
		/**侍女伤害*/
		Maiddamrate = "lang_common.Maiddamrate",
		/**侍女真伤*/
		Maidrealdam = "lang_common.Maidrealdam",
		/**男性*/
		Male = "lang_common.Male",
		/**净胜场*/
		MarginField = "lang_common.MarginField",
		/**已满级*/
		MaxLv = "lang_common.MaxLv",
		/**已达最高级*/
		MaxLv2 = "lang_common.MaxLv2",
		/**已满阶*/
		MaxStage = "lang_common.MaxStage",
		/**生命*/
		Max_hp = "lang_common.Max_hp",
		/**元宝*/
		MoneyGold = "lang_common.MoneyGold",
		/**仙玉*/
		MoneyXianyu = "lang_common.MoneyXianyu",
		/**铜币收益*/
		Moneyrate = "lang_common.Moneyrate",
		/**我的总积分*/
		MyAllIntegral = "lang_common.MyAllIntegral",
		/**我的积分*/
		MyIntegral = "lang_common.MyIntegral",
		/**我的层数*/
		MyLayer = "lang_common.MyLayer",
		/**我的排名*/
		MyRank = "lang_common.MyRank",
		/**我的嫩叶*/
		MySnowflake = "lang_common.MySnowflake",
		/**名称*/
		Name = "lang_common.Name",
		/**附近玩家*/
		NearbyPlayer = "lang_common.NearbyPlayer",
		/**下级属性*/
		NextAttr = "lang_common.NextAttr",
		/**下级效果*/
		NextEff = "lang_common.NextEff",
		/**昵称*/
		NickName = "lang_common.NickName",
		/**该活动暂未开启！*/
		NoActivity = "lang_common.NoActivity",
		/**挑战次数不足*/
		NoChallegeTimes = "lang_common.NoChallegeTimes",
		/**普*/
		NormalVip = "lang_common.NormalVip",
		/**未上榜*/
		NotOnRank = "lang_common.NotOnRank",
		/**未开放*/
		NotOpen = "lang_common.NotOpen",
		/**不是队长，无法操作!*/
		NotTeamLeader = "lang_common.NotTeamLeader",
		/**未解锁*/
		NotUnlock = "lang_common.NotUnlock",
		/**无*/
		Nothing = "lang_common.Nothing",
		/**BOSS增伤*/
		Onlytoboss = "lang_common.Onlytoboss",
		/**开启条件*/
		OpenCond = "lang_common.OpenCond",
		/**开启中*/
		Opening = "lang_common.Opening",
		/**攻击加成*/
		P_atk = "lang_common.P_atk",
		/**暴击加成*/
		P_crit = "lang_common.P_crit",
		/**防御加成*/
		P_def = "lang_common.P_def",
		/**闪避加成*/
		P_dodge = "lang_common.P_dodge",
		/**火系攻击加成*/
		P_fire_atk = "lang_common.P_fire_atk",
		/**火系防御加成*/
		P_fire_def = "lang_common.P_fire_def",
		/**金系攻击加成*/
		P_gold_atk = "lang_common.P_gold_atk",
		/**金系防御加成*/
		P_gold_def = "lang_common.P_gold_def",
		/**命中加成*/
		P_hit = "lang_common.P_hit",
		/**尊皇攻击加成*/
		P_juvenia_atk = "lang_common.P_juvenia_atk",
		/**尊皇防御加成*/
		P_juvenia_def = "lang_common.P_juvenia_def",
		/**生命加成*/
		P_max_hp = "lang_common.P_max_hp",
		/**变身时间加成*/
		P_qiling_tratime = "lang_common.P_qiling_tratime",
		/**器灵伤害加成*/
		P_qilingdam = "lang_common.P_qilingdam",
		/**器灵技能伤害加成*/
		P_qilingskill = "lang_common.P_qilingskill",
		/**抗暴加成*/
		P_recr = "lang_common.P_recr",
		/**破甲加成*/
		P_redef = "lang_common.P_redef",
		/**土系攻击加成*/
		P_soil_atk = "lang_common.P_soil_atk",
		/**土系防御加成*/
		P_soil_def = "lang_common.P_soil_def",
		/**水系攻击加成*/
		P_water_atk = "lang_common.P_water_atk",
		/**水系防御加成*/
		P_water_def = "lang_common.P_water_def",
		/**木系攻击加成*/
		P_wood_atk = "lang_common.P_wood_atk",
		/**木系防御加成*/
		P_wood_def = "lang_common.P_wood_def",
		/**通关记录*/
		PassRecord = "lang_common.PassRecord",
		/**通关时间*/
		PassTime = "lang_common.PassTime",
		/**充值暂未开放*/
		PayNoOpen = "lang_common.PayNoOpen",
		/**PK增伤*/
		Pkdamrate = "lang_common.Pkdamrate",
		/**PK减伤*/
		Pkdedamrate = "lang_common.Pkdedamrate",
		/**玩家*/
		Player = "lang_common.Player",
		/**战力*/
		Power = "lang_common.Power",
		/**云游收益暴击*/
		Pro_critrate = "lang_common.Pro_critrate",
		/**%s不足*/
		PropCntLackTip = "lang_common.PropCntLackTip",
		/**道具描述*/
		PropDesc = "lang_common.PropDesc",
		/**变身时间增加*/
		Qiling_addtime = "lang_common.Qiling_addtime",
		/**器灵暴击率*/
		Qiling_critrate = "lang_common.Qiling_critrate",
		/**器灵连击率*/
		Qiling_dbhitrate = "lang_common.Qiling_dbhitrate",
		/**战位继承率*/
		Qiling_inheritrate = "lang_common.Qiling_inheritrate",
		/**器灵会心一击率*/
		Qiling_korate = "lang_common.Qiling_korate",
		/**器灵伤害*/
		Qilingdam = "lang_common.Qilingdam",
		/**器灵真实伤害*/
		Qilingrealdam = "lang_common.Qilingrealdam",
		/**排名*/
		Rank = "lang_common.Rank",
		/**第一名*/
		Rank1CHN = "lang_common.Rank1CHN",
		/**上榜积分*/
		RankIntegral = "lang_common.RankIntegral",
		/**第%s名*/
		RankNumStr = "lang_common.RankNumStr",
		/**排名玩家*/
		RankPlayer = "lang_common.RankPlayer",
		/**真实伤害*/
		Realdam = "lang_common.Realdam",
		/**境界*/
		Realm = "lang_common.Realm",
		/**推荐*/
		Recommend = "lang_common.Recommend",
		/**战绩*/
		Record = "lang_common.Record",
		/**抗暴*/
		Recr = "lang_common.Recr",
		/**抗暴率*/
		Recrate = "lang_common.Recrate",
		/**破甲*/
		Redef = "lang_common.Redef",
		/**转生*/
		Rein = "lang_common.Rein",
		/**剩余次数*/
		RemainCnt = "lang_common.RemainCnt",
		/**剩余时间*/
		RemainTime = "lang_common.RemainTime",
		/**为角色加成属性*/
		RoleAddAttr = "lang_common.RoleAddAttr",
		/**本服积分*/
		ServerIntegral = "lang_common.ServerIntegral",
		/**1、购买礼包即可获得现金红包；#N2、此活动每个礼包、每个ID每天只能参与一次；#N3、每天00点刷新现金红包领取次数;#N4、仅限此活动入口充值可领取现金红包，购买后请点击页面“提现”按钮提现，否则第二天会自动重置礼包而失效。#N5、现金礼包活动不算入首充、不参与累充活动、不提供VIP经验；#N6、现金红包会通过QQ钱包，以对话消息的形式提示玩家领取;#N7、超过24小时未领取红包则默认玩家放弃领取，系统会自动收回，经收回不补发，请玩家留意消息及时领取。*/
		Shouq2GiftRedpack1 = "lang_explain.Shouq2GiftRedpack1",
		/**1、连续7天登陆游戏，每日登录100%获得现金红包，最高可获得20元#N2、第3天登陆游戏可提现，提现金额为当前红包余额#N3、连续登陆7天可以全额提现，若登录天数未满7天，则第7天无法提现#N4、每天每个账号仅能提现一次#N5、现金红包会通过QQ钱包，以对话消息的形式提示玩家领取;#N6、超过24小时未领取红包则默认玩家放弃领取，系统会自动收回，经收回不补发，请玩家留意消息及时领取。*/
		Shouq2GiftRedpack2 = "lang_explain.Shouq2GiftRedpack2",
		/**神技附加暴击率*/
		Sjcritrate = "lang_common.Sjcritrate",
		/**神技增伤*/
		Sjimprate = "lang_common.Sjimprate",
		/**神技无视防御*/
		Sjrealdam = "lang_common.Sjrealdam",
		/**技能伤害*/
		Skidamrate = "lang_common.Skidamrate",
		/**技能效果*/
		SkillEffect = "lang_common.SkillEffect",
		/**嫩叶*/
		Snowflake = "lang_common.Snowflake",
		/**土攻*/
		Soil_atk = "lang_common.Soil_atk",
		/**土系伤害减免*/
		Soil_decrate = "lang_common.Soil_decrate",
		/**土防*/
		Soil_def = "lang_common.Soil_def",
		/**土系伤害增加*/
		Soil_imprate = "lang_common.Soil_imprate",
		/**阶*/
		Stage = "lang_common.Stage",
		/**星*/
		Star = "lang_common.Star",
		/**星级*/
		StarLv = "lang_common.StarLv",
		/**开始*/
		Start = "lang_common.Start",
		/**停止*/
		Stop = "lang_common.Stop",
		/**成功*/
		Success = "lang_common.Success",
		/**超*/
		SuperVip = "lang_common.SuperVip",
		/**次*/
		Times = "lang_common.Times",
		/**勇士攻击力*/
		TowerHeroAtk = "lang_common.TowerHeroAtk",
		/**勇士攻击范围*/
		TowerHeroRange = "lang_common.TowerHeroRange",
		/**魅力*/
		Trearate = "lang_common.Trearate",
		/**转*/
		Turn = "lang_common.Turn",
		/**未激活*/
		UnActive = "lang_common.UnActive",
		/**未转生*/
		UnRein = "lang_common.UnRein",
		/**升级条件*/
		UpLvCond = "lang_common.UpLvCond",
		/**值*/
		Value = "lang_common.Value",
		/**胜利*/
		Victory = "lang_common.Victory",
		/**查看详情*/
		ViewDetail = "lang_common.ViewDetail",
		/**VIP等级不足*/
		VipLvNotEnough = "lang_common.VipLvNotEnough",
		/**等待*/
		Wait = "lang_common.Wait",
		/**虚位以待*/
		WaitPosition = "lang_common.WaitPosition",
		/**万*/
		Wan = "lang_common.Wan",
		/**水攻*/
		Water_atk = "lang_common.Water_atk",
		/**水系伤害减免*/
		Water_decrate = "lang_common.Water_decrate",
		/**水防*/
		Water_def = "lang_common.Water_def",
		/**水系伤害增加*/
		Water_imprate = "lang_common.Water_imprate",
		/**木攻*/
		Wood_atk = "lang_common.Wood_atk",
		/**木系伤害减免*/
		Wood_decrate = "lang_common.Wood_decrate",
		/**木防*/
		Wood_def = "lang_common.Wood_def",
		/**木系伤害增加*/
		Wood_imprate = "lang_common.Wood_imprate",
		/**1.每个宗门都具有一棵世界树，世界树培养程度越高，树龄越大。#N2.每个树龄具有三个灵果，使用露水对灵果进行培养可使灵果成熟。#N3.当全服给露到达满值时，灵果成熟，必须个人给露到达满值才有资格摘取。#N4.世界树每10岁会增长一个枝干，枝干结出仙种可在仙圃中培养个人的仙树。#N5.仙种会以时间的形式进行成熟，时间到达满足仙种摘取条件的人才可获得。*/
		WorldTree = "lang_explain.WorldTree",
		/**1.武神合体规则为#G二合一#end，#G必定#end会生成一个#G全新的#end武神。#N2.相同品质的武神合体，#G更容易#end生成#G更高#end品质的武神。#N3.不同品质的武神合体，生成武神的品质#G不会#end低于最低品质的武神。#N4.品质#G跨度过大#end的武神合体，会影响合体的质量，请慎重考虑。#N5.使用武魂合体时，会生成一个与主武神一致的副武神，但武魂的品质#G必须#end与主武神#G相同#end。#N6.武魂具有上古武神之力，具有#G更高#end的几率生成#G更高品质#end的武神，但武魂#R不能#end作为主武神进行合体。*/
		WuShenHeTi = "lang_explain.WuShenHeTi",
		/**稀有掉落*/
		Xiyourate = "lang_common.Xiyourate",
		/**1.通关指定的神墓关卡可开启对应玄功栏。#N2.高品质玄功可吞噬低品质进行升级，提升主属性。#N3.玄功会随机附带1-3条副属性，品质越高副属性数量越多，副属性不会随升级提升。*/
		XuanGong = "lang_explain.XuanGong",
		/**1.每个部位只能装备一张同系列的灵卡#N2.同系列不同品质灵卡可互相替换#N3.灵卡最高强化15级，强化有成功概率，失败会降级，失败后有一定概率触发保护可维持等级不变#N4.强化只提升主属性，副属性只能洗练获得#N5.灵卡可分解，红色品质以上分解有概率获得古灵水晶和古灵精粹，分解时会返还八成强化材料*/
		YLLingkaRile = "lang_explain.YLLingkaRile",
		/**源力攻击*/
		Yl_atk = "lang_common.Yl_atk",
		/**源力攻击伤害*/
		Yl_atk_dam = "lang_common.Yl_atk_dam",
		/**源力混沌*/
		Yl_chaos_atk = "lang_common.Yl_chaos_atk",
		/**混沌伤害*/
		Yl_chaos_sam = "lang_common.Yl_chaos_sam",
		/**源力转化率*/
		Yl_cv_rate = "lang_common.Yl_cv_rate",
		/**点燃几率提升*/
		Yl_dr_rate = "lang_common.Yl_dr_rate",
		/**点燃时间延长*/
		Yl_dr_time = "lang_common.Yl_dr_time",
		/**护盾额外回复速度*/
		Yl_exreply = "lang_common.Yl_exreply",
		/**护盾额外回复间隔缩短*/
		Yl_exreply_inter = "lang_common.Yl_exreply_inter",
		/**额外护盾*/
		Yl_exshield = "lang_common.Yl_exshield",
		/**源力额外攻击*/
		Yl_extak = "lang_common.Yl_extak",
		/**源力火焰*/
		Yl_fire_atk = "lang_common.Yl_fire_atk",
		/**火焰伤害*/
		Yl_fire_dam = "lang_common.Yl_fire_dam",
		/**源力冰霜*/
		Yl_frost_atk = "lang_common.Yl_frost_atk",
		/**冰霜伤害*/
		Yl_frost_dam = "lang_common.Yl_frost_dam",
		/**感电几率提升*/
		Yl_gd_rate = "lang_common.Yl_gd_rate",
		/**感电时间延长*/
		Yl_gd_time = "lang_common.Yl_gd_time",
		/**冰缓几率提升*/
		Yl_ice_rate = "lang_common.Yl_ice_rate",
		/**冰缓时间延长*/
		Yl_ice_time = "lang_common.Yl_ice_time",
		/**源力闪电*/
		Yl_light_atk = "lang_common.Yl_light_atk",
		/**闪电伤害*/
		Yl_light_dam = "lang_common.Yl_light_dam",
		/**源力最大攻击*/
		Yl_maxatk = "lang_common.Yl_maxatk",
		/**源力最大护盾*/
		Yl_maxshield = "lang_common.Yl_maxshield",
		/**混沌抗性*/
		Yl_p_chaos = "lang_common.Yl_p_chaos",
		/**火焰抗性*/
		Yl_p_fire = "lang_common.Yl_p_fire",
		/**冰霜抗性*/
		Yl_p_frost = "lang_common.Yl_p_frost",
		/**闪电抗性*/
		Yl_p_light = "lang_common.Yl_p_light",
		/**源力回复速度*/
		Yl_reply = "lang_common.Yl_reply",
		/**护盾回复间隔缩短*/
		Yl_reply_inter = "lang_common.Yl_reply_inter",
		/**源力攻击抗性*/
		Yl_res_atk = "lang_common.Yl_res_atk",
		/**源力护盾*/
		Yl_shield = "lang_common.Yl_shield",
		/**失明几率提升*/
		Yl_sm_rate = "lang_common.Yl_sm_rate",
		/**失明时间延长*/
		Yl_sm_time = "lang_common.Yl_sm_time",
		/**源力*/
		Yuanli = "lang_common.Yuanli",
		/**1.未激活源力的玩家可使用默认的源力技能#N2.激活源力的玩家可自行选择切换自己的源力技能还是默认技能*/
		YuanliDevil2 = "lang_explain.YuanliDevil2",
		/**#Y1#end星可得#Y1#end条附加属性，属性范围：#N攻击：#Y3000~6000#end防御：#Y3000~6000#end#N破甲：#Y3000~6000#end暴击：#Y3000~6000#end#N抗暴：#Y3000~6000#end闪避：#Y3000~6000#end#N命中：#Y3000~6000#end生命：#Y60000~120000#end*/
		ZhenFaBall1 = "lang_explain.ZhenFaBall1",
		/**#Y2#end星可得#Y1#end条附加属性，属性范围：#N攻击：#Y6000~12000#end防御：#Y6000~12000#end#N破甲：#Y6000~12000#end暴击：#Y6000~12000#end#N抗暴：#Y6000~12000#end闪避：#Y6000~12000#end#N命中：#Y6000~12000#end生命：#Y120000~240000#end*/
		ZhenFaBall2 = "lang_explain.ZhenFaBall2",
		/**#Y5#end星可得#Y3#end条附加属性，属性范围：#N攻击：#Y30000~60000#end防御：#Y30000~60000#end#N破甲：#Y30000~60000#end暴击：#Y30000~60000#end#N抗暴：#Y30000~60000#end闪避：#Y30000~60000#end#N命中：#Y30000~60000#end生命：#Y600000~1200000#end*/
		ZhenFaBall5 = "lang_explain.ZhenFaBall5",
		/**卓越一击*/
		Zhitdamrate = "lang_common.Zhitdamrate",
		/**卓越一击率*/
		Zhitrate = "lang_common.Zhitrate",
		/**转*/
		Zhuan = "lang_common.Zhuan",
		/**转生需求*/
		ZhuanShengCond = "lang_common.ZhuanShengCond",
	}
}