export interface Book {
  id: number;
  title: string;
  englishTitle: string;
  year: number;
  description: string;
  summary: {
    oneLine: string;
    beginning: string;
    development: string;
    truth: string;
  };
  characters: string[];
  scenes: string[];
  images: {
    scene: string;
    character: string;
    symbol: string;
  };
  landmark: {
    name: string;
    x: number;
    y: number;
  };
}

export const books: Book[] = [
  {
    id: 1,
    title: "罗杰疑案",
    englishTitle: "The Murder of Roger Ackroyd",
    year: 1926,
    description: "波洛系列成名作，叙述性诡计开山之作，颠覆推理叙事逻辑。",
    summary: {
      oneLine: "一个关于叙述性诡计的开山之作，波洛 retirement 后被卷入乡村庄园的谋杀案。",
      beginning: "金斯艾伯特村的富商罗杰·艾克罗伊德被发现在书房中被刺身亡。著名侦探赫尔克里·波洛此时正隐居在附近，应死者侄女弗洛拉的请求介入调查。",
      development: "波洛逐一询问庄园内的每个人：死者的弟媳、侄女、管家、女仆、家庭医生谢泼德...每个人似乎都有秘密，都有动机。波洛运用他著名的'灰色脑细胞'，通过细微的线索和矛盾之处，逐步揭开真相。",
      truth: "【剧透警告】凶手竟然是叙述者本人——谢泼德医生！他不仅是罗杰的密友，更是勒索罗杰的凶手。阿加莎通过第一人称叙述者的视角欺骗了所有读者，这一创新手法成为推理小说史上最具争议的诡计之一。"
    },
    characters: [
      "赫尔克里·波洛 - 退休的比利时侦探，以'灰色脑细胞'著称",
      "谢泼德医生 - 乡村医生，案件的叙述者",
      "罗杰·艾克罗伊德 - 死者，富有的乡绅",
      "弗洛拉·艾克罗伊德 - 罗杰的侄女",
      "拉尔夫·佩顿 - 罗杰的养子，失踪的嫌疑人"
    ],
    scenes: [
      "书房发现尸体：罗杰在书房中被刺身亡，房门从内部反锁",
      "波洛的质问：波洛逐一询问每个嫌疑人，揭露他们的谎言",
      "真相大白：波洛揭示凶手就是叙述者谢泼德医生"
    ],
    images: {
      scene: "/assets/books/book01_roger/scene01_exterior_1920x1080.png",
      character: "/assets/books/book01_roger/scene02_character_1920x1080.png",
      symbol: "/assets/books/book01_roger/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "庄园大宅", x: 20, y: 22 }
  },
  {
    id: 2,
    title: "东方快车谋杀案",
    englishTitle: "Murder on the Orient Express",
    year: 1934,
    description: "波洛标志性作品，震撼结局之一，探讨法律与正义边界。",
    summary: {
      oneLine: "一列豪华列车上的密室谋杀，十二个乘客共同编织的复仇之网。",
      beginning: "东方快车因大雪被困在巴尔干半岛。午夜时分，美国富商雷切特被发现死在包厢内，身中十二刀。著名侦探波洛恰好在同一列车上，受托调查此案。",
      development: "波洛发现死者其实是臭名昭著的绑匪卡塞蒂，他曾绑架并杀害了阿姆斯特朗上校的三岁女儿黛西。列车上的每位乘客似乎都与阿姆斯特朗家族有关联：家庭教师、女仆、司机、医生、演员...",
      truth: "【剧透警告】十二名乘客每个人都是凶手！他们各自刺了一刀，为阿姆斯特朗家族复仇。波洛面临道德困境：是按法律揭发他们，还是让他们继续生活？最终他选择了一个'官方'的解释，让正义得以伸张。"
    },
    characters: [
      "赫尔克里·波洛 - 比利时侦探",
      "雷切特/卡塞蒂 - 死者，真实身份是绑架犯",
      "布克先生 - 列车公司董事，波洛的朋友",
      "康斯坦丁医生 - 希腊医生，协助验尸",
      "哈德曼先生 - 自称侦探的乘客"
    ],
    scenes: [
      "雪夜被困：东方快车因大雪被迫停车",
      "包厢谋杀：雷切特被发现身中十二刀",
      "波洛的审判：波洛揭示十二人共同复仇的真相"
    ],
    images: {
      scene: "/assets/books/book02_orient/scene01_exterior_1920x1080.png",
      character: "/assets/books/book02_orient/scene02_character_1920x1080.png",
      symbol: "/assets/books/book02_orient/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "东方快车", x: 50, y: 20 }
  },
  {
    id: 3,
    title: "ABC谋杀案",
    englishTitle: "The ABC Murders",
    year: 1936,
    description: "波洛连环杀人经典，开创'藏叶于林'犯罪模式，心理诡计极致。",
    summary: {
      oneLine: "一个按字母顺序杀人的连环凶手，将波洛玩弄于股掌之间。",
      beginning: "波洛收到一封挑战信，署名'ABC'。凶手宣布将按照字母顺序杀人：安多弗（Andover）、贝克斯希尔（Bexhill）、彻斯顿（Churston）...第一具尸体在安多弗出现，死者姓名为阿谢尔（Ascher）。",
      development: "凶手继续按字母顺序作案：贝克斯希尔的贝蒂·巴纳德、彻斯顿的卡迈克尔·克拉克爵士。每次作案前，波洛都会收到警告信。凶手似乎享受着这场与名侦探的猫鼠游戏。",
      truth: "【剧透警告】凶手是卡迈克尔·克拉克爵士的兄弟富兰克林·克拉克。他为了继承遗产，设计了这个'藏叶于林'的诡计——通过制造连环杀人案来掩盖真正的目标。ABC只是一个精神病人的幌子。"
    },
    characters: [
      "赫尔克里·波洛 - 比利时侦探",
      "亚瑟·黑斯廷斯上尉 - 波洛的老朋友，叙述者",
      "ABC/富兰克林·克拉克 - 凶手",
      "亚历山大·波拿帕特·卡斯特 - 被利用的精神病人",
      "汤姆森督察 - 苏格兰场警官"
    ],
    scenes: [
      "挑战信：波洛收到ABC的挑战信",
      "安多弗谋杀：第一起案件在安多弗发生",
      "真相揭露：波洛识破'藏叶于林'的诡计"
    ],
    images: {
      scene: "/assets/books/book03_abc/scene01_exterior_1920x1080.png",
      character: "/assets/books/book03_abc/scene02_character_1920x1080.png",
      symbol: "/assets/books/book03_abc/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "ABC邮筒", x: 22, y: 48 }
  },
  {
    id: 4,
    title: "尼罗河上的惨案",
    englishTitle: "Death on the Nile",
    year: 1937,
    description: "爱情与阴谋交织，精密不在场证明的代表作。",
    summary: {
      oneLine: "尼罗河上的豪华游轮，一段三角恋情引发的致命谋杀。",
      beginning: "美丽富有的琳内特·里奇韦与好友杰奎琳的未婚夫西蒙·多伊尔闪电结婚。三人同乘尼罗河游轮，杰奎琳如影随形地纠缠着他们。在一个夜晚，琳内特被发现死在舱房中，头部中弹。",
      development: "波洛也在游轮上，开始调查。船上乘客众多，每个人都有嫌疑：被琳内特夺走土地的庄园主、觊觎她财产的美国律师、声称看到凶手的年轻女子...而杰奎琳和西蒙似乎有完美的不在场证明。",
      truth: "【剧透警告】西蒙和杰奎琳合谋作案。他们假装反目，实际上一直相爱。西蒙假装被杰奎琳枪击（其实是空包弹），然后在'照顾'他时，杰奎琳潜入琳内特房间将其杀害。完美的不在场证明背后是一场精心策划的双人犯罪。"
    },
    characters: [
      "赫尔克里·波洛 - 比利时侦探",
      "琳内特·里奇韦 - 死者，富有的女继承人",
      "西蒙·多伊尔 - 琳内特的丈夫，杰奎琳的前未婚夫",
      "杰奎琳·德·贝尔福特 - 西蒙的前未婚妻",
      "科妮莉亚·罗布森 - 游轮上的乘客"
    ],
    scenes: [
      "尼罗河游轮：豪华游轮上的三角恋情",
      "密室谋杀：琳内特被发现死在反锁的舱房中",
      "不在场证明：波洛识破西蒙和杰奎琳的双人诡计"
    ],
    images: {
      scene: "/assets/books/book04_nile/scene01_exterior_1920x1080.png",
      character: "/assets/books/book04_nile/scene02_character_1920x1080.png",
      symbol: "/assets/books/book04_nile/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "尼罗河蒸汽船", x: 20, y: 76 }
  },
  {
    id: 5,
    title: "无人生还",
    englishTitle: "And Then There Were None",
    year: 1939,
    description: "无侦探模式巅峰，暴风雪山庄标杆，全球销量超1亿册。",
    summary: {
      oneLine: "十个人被邀请到孤岛，按照童谣一个接一个死去。",
      beginning: "十个互不相识的人收到邀请，来到德文海岸的士兵岛。主人未现身，只有一首童谣《十个小士兵》和十个瓷偶。当晚，第一个人死去，瓷偶也少了一个——'一个呛死，还剩九个'。",
      development: "暴风雨切断了与外界的联系。按照童谣的描述，人们一个接一个死去：被氰化物毒死、被重物砸死、被刺死、被斧头砍死...每死一个人，瓷偶就减少一个。幸存者们互相猜疑，恐惧蔓延。",
      truth: "【剧透警告】凶手是法官沃格雷夫。他身患绝症，决定惩罚那些法律无法制裁的罪犯。他假装死亡，躲在暗处继续杀人，最后自杀。他留下自白书解释了全部真相，直到尸体被发现时才被揭晓。"
    },
    characters: [
      "法官劳伦斯·沃格雷夫 - 凶手，伪装成受害者",
      "维拉·克莱索恩 - 年轻女教师，最后的幸存者",
      "菲利普·隆巴德 - 冒险家，携带枪支",
      "埃米莉·布伦特 - 虔诚的老处女",
      "约翰·马斯顿 - 第一个死者，纨绔子弟"
    ],
    scenes: [
      "士兵岛邀请：十人收到神秘邀请来到孤岛",
      "童谣杀人：按照《十个小士兵》童谣逐一死去",
      "法官的自白：沃格雷夫法官留下真相的遗书"
    ],
    images: {
      scene: "/assets/books/book05_none/scene01_exterior_1920x1080.png",
      character: "/assets/books/book05_none/scene02_character_1920x1080.png",
      symbol: "/assets/books/book05_none/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "孤岛庄园", x: 80, y: 22 }
  },
  {
    id: 6,
    title: "阳光下的罪恶",
    englishTitle: "Evil Under the Sun",
    year: 1941,
    description: "海滨谋杀案，破解时间骗局，人性欲望的深刻暴露。",
    summary: {
      oneLine: "阳光明媚的海滨度假胜地，一场精心策划的时间诡计谋杀。",
      beginning: "著名女演员阿伦娜·马歇尔来到莱瑟库姆湾的海滨酒店度假。她美丽、富有，却 also 残忍地玩弄男人的感情。某天，她被发现在海滩上被勒死，而她的丈夫肯尼斯有完美的不在场证明。",
      development: "波洛也在酒店度假，开始调查。嫌疑人包括：阿伦娜的继女琳达、被抛弃的情人帕特里克、嫉妒的牧师妻子、以及阿伦娜的丈夫肯尼斯。每个人都有动机，但每个人都有不在场证明。",
      truth: "【剧透警告】凶手是帕特里克和他的妻子克里斯汀合谋。他们设计了一个时间诡计：克里斯汀假扮阿伦娜在阳台上出现，让证人以为阿伦娜还活着，而实际上她已经被杀害。帕特里克利用'不可能犯罪'的时间差制造了完美的不在场证明。"
    },
    characters: [
      "赫尔克里·波洛 - 比利时侦探",
      "阿伦娜·马歇尔 - 死者，著名女演员",
      "肯尼斯·马歇尔 - 阿伦娜的丈夫，陆军上校",
      "琳达·马歇尔 - 肯尼斯的女儿，阿伦娜的继女",
      "帕特里克·雷德芬 - 被阿伦娜玩弄的情人"
    ],
    scenes: [
      "海滨酒店：阳光明媚的度假胜地",
      "海滩谋杀：阿伦娜被发现死在海滩上",
      "时间诡计：波洛识破帕特里克和克里斯汀的双人作案"
    ],
    images: {
      scene: "/assets/books/book06_sun/scene01_exterior_1920x1080.png",
      character: "/assets/books/book06_sun/scene02_character_1920x1080.png",
      symbol: "/assets/books/book06_sun/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "海滨酒店", x: 78, y: 45 }
  },
  {
    id: 7,
    title: "谋杀启事",
    englishTitle: "A Murder Is Announced",
    year: 1950,
    description: "马普尔系列巅峰，乡村谋杀典范，从日常洞察揭开秘密。",
    summary: {
      oneLine: "一则报纸上的谋杀预告，揭开了乡村小镇的黑暗秘密。",
      beginning: "奇平克里格霍恩村的报纸上出现一则奇怪的启事：'一桩谋杀将于十月二十九日星期五晚六点半在小围场发生。'当晚，人们聚集在小围场外等待，灯突然熄灭，枪声响起。年轻的斯威特纳姆小姐被发现中弹。",
      development: "马普尔小姐恰好在村里做客，开始调查。小围场住着布莱克洛克小姐和她的两个表亲、一个年轻房客。随着调查深入，马普尔发现每个人都有秘密：遗产继承、身份伪装、过去的罪行...",
      truth: "【剧透警告】凶手是布莱克洛克小姐的'表妹'多拉·邦纳，真实身份是夏洛特·布莱克洛克。她为了继承遗产，假扮成自己的姐姐莱蒂，并设计杀害了真正的莱蒂。谋杀启事是她为了制造混乱、嫁祸他人而设计的。"
    },
    characters: [
      "简·马普尔小姐 - 乡村老处女侦探",
      "莱蒂/夏洛特·布莱克洛克 - 凶手，假扮自己的姐姐",
      "多拉·邦纳 - 布莱克洛克小姐的'表妹'",
      "帕特里克·西蒙斯 - 布莱克洛克小姐的表亲",
      "朱莉娅·西蒙斯 - 帕特里克的妹妹"
    ],
    scenes: [
      "谋杀启事：报纸上出现奇怪的谋杀预告",
      "小围场枪击：灯灭后枪声响起，斯威特纳姆中弹",
      "马普尔的洞察：马普尔识破夏洛特的身份伪装"
    ],
    images: {
      scene: "/assets/books/book07_announced/scene01_exterior_1920x1080.png",
      character: "/assets/books/book07_announced/scene02_character_1920x1080.png",
      symbol: "/assets/books/book07_announced/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "乡村公告栏", x: 50, y: 78 }
  },
  {
    id: 8,
    title: "帷幕",
    englishTitle: "Curtain: Poirot's Last Case",
    year: 1975,
    description: "波洛最终一案，与宿敌终极对决，侦探生涯的悲壮落幕。",
    summary: {
      oneLine: "波洛的最后一案，与一生宿敌X的终极对决，侦探生涯的悲壮落幕。",
      beginning: "年迈的波洛和黑斯廷斯回到他们第一次合作破案的斯泰尔斯庄园。波洛告诉黑斯廷斯，他的宿敌X——一个从未亲自动手却操纵他人犯罪的恶魔——就在这座庄园里。很快，一系列'意外'开始发生。",
      development: "庄园里的客人一个接一个地死去，每个看起来都是自杀或意外。但波洛知道这是X的杰作——他通过心理操纵，让无辜的人变成杀人凶手。波洛的健康每况愈下，他知道自己时日无多。",
      truth: "【剧透警告】X是诺顿，一个看似无害的小个子男人。波洛最终意识到，为了阻止X继续作恶，他必须亲自动手。他杀死了诺顿，然后写下了自白书。在信中，波洛向黑斯廷斯坦白了一切，并请求他如果认为波洛做错了，就销毁这封信。这是波洛的最后一案，也是他的终局。"
    },
    characters: [
      "赫尔克里·波洛 - 年迈的比利时侦探",
      "亚瑟·黑斯廷斯上尉 - 波洛的老朋友",
      "X/诺顿 - 波洛的宿敌，心理操纵大师",
      "朱迪思·黑斯廷斯 - 黑斯廷斯的女儿",
      "富兰克林医生 - 庄园里的医生"
    ],
    scenes: [
      "重返斯泰尔斯：波洛和黑斯廷斯回到最初的起点",
      "X的阴影：一系列'意外'死亡发生",
      "波洛的终局：波洛杀死诺顿，写下最后的自白"
    ],
    images: {
      scene: "/assets/books/book08_curtain/scene01_exterior_1920x1080.png",
      character: "/assets/books/book08_curtain/scene02_character_1920x1080.png",
      symbol: "/assets/books/book08_curtain/scene03_symbol_1920x1080.png"
    },
    landmark: { name: "帷幕庄园", x: 80, y: 74 }
  }
];
