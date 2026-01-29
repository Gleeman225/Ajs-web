# 生图提示词（Prompts）清单（工具无关）

> 适用：NanoBnana Pro / 即梦AI（或任何支持 16:9 输出的生图工具）。  
> 目标：统一画风（英伦旧世纪 + 牛皮纸/铜版画质感），用于站点大门、地图、书籍详情插图。  
> 说明：如果工具支持“参考图/风格一致”，建议先生成 1 张你最满意的 **地图或大门**，后续所有图都用它做风格参考图。

## 通用设置建议
- 画幅：`16:9`
- 分辨率：
  - 大门：`1920x1080`（1x）与 `3840x2160`（2x）
  - 地图：`1920x1080`（1x）与 `3840x2160`（2x）
  - 书籍详情插图：`1920x1080`
- 统一要求：无水印、无logo、无UI边框、尽量无文字（地图也不要写书名/简介）

## 全局风格基底（建议每条 prompt 都追加）
> 你可以把这一段作为“风格尾巴”，复制到每条 prompt 的末尾。

**STYLE_BASE（中文）**
- 旧世纪英伦气质，1920s-1950s 氛围，牛皮纸与复古铜版画/蚀刻线描风格，墨线勾勒+轻微水彩晕染，低饱和暖棕/墨黑/雾灰，电影级光影与轻雾，细节丰富但不花哨，画面干净、无文字

**NEGATIVE_BASE（可选）**
- 不要：任何文字、logo、水印、现代电子设备、霓虹赛博风、现代车辆、科幻、夸张卡通、血腥暴力、真实演员脸、电影剧照感、过度写实摄影

---

## 1) 大门页（Landing / Door）

### 1.1 大门全屏插画（闭门）
- 文件：`assets/door/door_main_1x_1920x1080.png` / `assets/door/door_main_2x_3840x2160.png`
- Prompt：
  - “全屏画面是一扇双开英伦古典大门，深色橡木门板与黄铜门把手，门把手在画面偏中部位置，门板有细腻木纹与岁月痕迹，门前有非常轻微的薄雾与尘埃光束，整体庄重、静谧、邀请式氛围；构图留出门把附近可做微弱光晕提示的空间；不要出现任何文字。STYLE_BASE”
- Negative（如支持）：
  - “NEGATIVE_BASE”

### 1.2 菠萝表情（提示图标）
- 文件：`assets/ui/pineapple_hint_512.png`
- Prompt：
  - “一个可爱的菠萝图标/表情，但风格要与全站复古一致：铜版画线描+轻水彩上色，轮廓清晰、背景透明或纯色，适合在谜语弹层中闪烁展示；不要文字，不要现代贴纸感。STYLE_BASE”
- Negative（如支持）：
  - “NEGATIVE_BASE”

---

## 2) 地图页（Map）

### 2.1 单张完整地图大图（MVP）
- 文件：`assets/map/map_full_1x_1920x1080.png` / `assets/map/map_full_2x_3840x2160.png`
- Prompt：
  - “一张全屏牛皮纸藏宝图风格的装饰地图，英伦旧世纪气质，纸张有折痕与做旧污渍、墨线罗盘与装饰花纹；地图上有 8 个明显的‘地标插画’分布在画面不同区域（不要文字标签），并用一条复古点线/虚线把它们串联成探索路径；地标分别是：①常春藤英国乡村庄园大宅（尖顶烟囱）②雪夜豪华列车与蒸汽站台③复古红色邮筒与字母线索意象（不要写ABC字样）④尼罗河蒸汽船与埃及神庙剪影⑤暴风雨海面上的孤岛悬崖庄园⑥海滨度假酒店与遮阳伞⑦乡村公告栏/集市意象⑧古老庄园与厚重窗帘剪影；整体留出足够空白让前端叠加 hover 热区；不要出现书名、简介等文字。STYLE_BASE”
- Negative（如支持）：
  - “NEGATIVE_BASE”

---

## 3) 书籍详情插图（每本 3 张，1920x1080）

> 结构固定：  
> - `scene01_exterior`：典型场景外观（大景/环境）  
> - `scene02_character`：关键人物氛围（不指向真实演员；可用剪影/半身像/道具氛围）  
> - `scene03_symbol`：高潮意象（线索感、象征物、紧张气氛；不血腥）

### Book 01 《罗杰疑案》（The Murder of Roger Ackroyd, 1926）
1) `assets/books/book01_roger/scene01_exterior_1920x1080.png`
   - Prompt：“黄昏的英国乡村庄园大宅外景，常春藤覆盖的石墙与尖顶烟囱，湿润草坪与碎石小径，远处薄雾，静谧但暗藏不安，推理氛围浓；无文字。STYLE_BASE”
2) `assets/books/book01_roger/scene02_character_1920x1080.png`
   - Prompt：“一位比利时侦探的氛围形象：精致小胡子、1920年代西装、手持手杖或小本子，站在壁炉旁沉思，光线从侧面照出轮廓，强调‘灰色脑细胞’的冷静与逻辑；避免像任何真人演员。STYLE_BASE”
3) `assets/books/book01_roger/scene03_symbol_1920x1080.png`
   - Prompt：“庄园书房的静物意象：写字台、封蜡信件、旧式留声机/录音装置的轮廓、钟表与阴影，灯光集中在关键线索上，悬疑与反转的预感；无文字无血腥。STYLE_BASE”

### Book 02 《东方快车谋杀案》（Murder on the Orient Express, 1934）
4) `assets/books/book02_orient/scene01_exterior_1920x1080.png`
   - Prompt：“雪夜中一列豪华长途列车停在偏远站台，蒸汽上升，车窗暖光透出，铁轨被雪覆盖，远处山影；典雅、压迫感与孤立感并存；无文字。STYLE_BASE”
5) `assets/books/book02_orient/scene02_character_1920x1080.png`
   - Prompt：“比利时侦探在列车走廊的氛围镜头：精致小胡子、手持怀表或笔记，暖光与冷雪光交错，周围门扉紧闭，暗示‘每个人都有秘密’；无真人脸既视感。STYLE_BASE”
6) `assets/books/book02_orient/scene03_symbol_1920x1080.png`
   - Prompt：“豪华包厢内的线索意象：碎裂的怀表、半掩的车厢门、散落的手套/手帕与雪光映入的阴影，紧张但不血腥；无文字。STYLE_BASE”

### Book 03 《ABC 谋杀案》（The ABC Murders, 1936）
7) `assets/books/book03_abc/scene01_exterior_1920x1080.png`
   - Prompt：“1930年代英国小镇火车站外景，复古候车亭与铁轨延伸，潮湿石板路与路灯，远处雾气；侦探小说节奏感强；不要站牌文字。STYLE_BASE”
8) `assets/books/book03_abc/scene02_character_1920x1080.png`
   - Prompt：“侦探在桌前阅读一封匿名信，信纸上只有模糊的字母意象（不要可读文字），旁边摊开时刻表与地图，灯光聚焦在信上；无真人既视感。STYLE_BASE”
9) `assets/books/book03_abc/scene03_symbol_1920x1080.png`
   - Prompt：“线索拼图静物：按顺序摆放的三枚字母意象（抽象形状，不写ABC）、一支钢笔、折叠地图与红线，营造‘连环逻辑陷阱’；无文字。STYLE_BASE”

### Book 04 《尼罗河上的惨案》（Death on the Nile, 1937）
10) `assets/books/book04_nile/scene01_exterior_1920x1080.png`
   - Prompt：“尼罗河蒸汽船外景，金色落日与水面反光，远处埃及神庙/方尖碑剪影，热风与轻雾，奢华旅行氛围与危险暗流并存；无文字。STYLE_BASE”
11) `assets/books/book04_nile/scene02_character_1920x1080.png`
   - Prompt：“侦探身穿浅色亚麻西装站在甲板栏杆旁，凝视河面，背后是旅客的模糊剪影与灯光，氛围优雅却紧绷；避免真人脸。STYLE_BASE”
12) `assets/books/book04_nile/scene03_symbol_1920x1080.png`
   - Prompt：“奢华与阴谋的意象静物：珠宝盒的轮廓、破碎的珍珠/手链意象、月光河面倒影与暗影，暗示爱情与谋划；无血腥无文字。STYLE_BASE”

### Book 05 《无人生还》（And Then There Were None, 1939）
13) `assets/books/book05_none/scene01_exterior_1920x1080.png`
   - Prompt：“暴风雨海面上的孤岛悬崖庄园外景，乌云翻滚、浪花拍岸，窗内微弱灯光，强烈孤立与压迫感；无文字。STYLE_BASE”
14) `assets/books/book05_none/scene02_character_1920x1080.png`
   - Prompt：“一间昏暗会客厅里十个模糊人物剪影围绕长桌，烛光摇曳、彼此戒备，氛围紧张而克制；不要可识别真人脸；无文字。STYLE_BASE”
15) `assets/books/book05_none/scene03_symbol_1920x1080.png`
   - Prompt：“十个小士兵/小人偶意象（可用抽象小雕像）摆在壁炉架或桌上，其中部分被移走，烛光与阴影形成倒计时般的压迫感；无文字无血腥。STYLE_BASE”

### Book 06 《阳光下的罪恶》（Evil Under the Sun, 1941）
16) `assets/books/book06_sun/scene01_exterior_1920x1080.png`
   - Prompt：“海滨度假酒店外景，遮阳伞与露台桌椅，强烈阳光与海面闪光，表面轻松却暗藏杀机；复古英伦度假气质；无文字。STYLE_BASE”
17) `assets/books/book06_sun/scene02_character_1920x1080.png`
   - Prompt：“侦探在海边步道上观察人群，戴夏季帽或拿手杖，阳光在他身后形成强烈轮廓光，神情冷静；无真人既视感。STYLE_BASE”
18) `assets/books/book06_sun/scene03_symbol_1920x1080.png`
   - Prompt：“海湾与岩石的意象：潮湿沙滩上的脚印、被海水半掩的线索物（抽象）、强烈日光与阴影对比，暗示时间与错位；无文字。STYLE_BASE”

### Book 07 《谋杀启事》（A Murder Is Announced, 1950）
19) `assets/books/book07_announced/scene01_exterior_1920x1080.png`
   - Prompt：“英格兰乡村小镇清晨，石板路与小店橱窗，公告栏/布告板作为画面视觉中心（无可读文字），温和日常里潜藏秘密；无文字。STYLE_BASE”
20) `assets/books/book07_announced/scene02_character_1920x1080.png`
   - Prompt：“一位年长的乡村女士侦探氛围形象：戴帽子、手持针织物/手包，坐在壁炉旁或窗边观察，目光温和却敏锐；不要像任何真人演员。STYLE_BASE”
21) `assets/books/book07_announced/scene03_symbol_1920x1080.png`
   - Prompt：“报纸启事意象静物：摊开的报纸（文字模糊不可读）、一只旧闹钟、壁炉上的摆件与阴影，营造‘日常里藏着预告的死亡’；无血腥无文字。STYLE_BASE”

### Book 08 《帷幕》（Curtain: Poirot's Last Case, 1975）
22) `assets/books/book08_curtain/scene01_exterior_1920x1080.png`
   - Prompt：“古老庄园外景（终局感），阴天、枯叶、长廊与高窗，窗内透出微弱暖光，厚重窗帘的剪影可见，氛围悲壮而克制；无文字。STYLE_BASE”
23) `assets/books/book08_curtain/scene02_character_1920x1080.png`
   - Prompt：“年迈的比利时侦探氛围形象：仍保持整洁小胡子与礼服感，坐姿沉稳或拄手杖，眼神深邃，房间里有厚重窗帘与昏黄灯光，强调‘最后一案’的沉重；避免真人脸。STYLE_BASE”
24) `assets/books/book08_curtain/scene03_symbol_1920x1080.png`
   - Prompt：“终局意象静物：厚重窗帘、棋盘/黑白格的抽象意象、写字台上的旧信件与熄灭的烛台，光线像舞台落幕一样收束；无文字无血腥。STYLE_BASE”

