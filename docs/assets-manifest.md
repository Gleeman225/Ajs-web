# 图片资产清单（MVP + 可选升级）

> 目标：你用 NanoBnana Pro / 即梦AI 生成一套统一画风的插画素材，用于站点大门页、地图页与书籍详情页。  
> 约定：MVP 只做桌面端；图片尽量无文字/无水印；全站统一“牛皮纸藏宝图/旧世纪/英伦气质”。

## 1) MVP 必需素材

### 1.1 大门页（Landing / Door）
1. `assets/door/door_main_1x_1920x1080.png`  
   - 用途：全屏英伦大门静态插画（US-01）
2. `assets/door/door_main_2x_3840x2160.png`  
   - 用途：高分屏更清晰（同上）
3. `assets/ui/pineapple_hint_512.png`  
   - 用途：谜语答错≥3次显示的“菠萝表情”（US-02）

### 1.2 地图页（Map）
4. `assets/map/map_full_1x_1920x1080.png`  
   - 用途：全屏牛皮纸藏宝图底图（US-04）
5. `assets/map/map_full_2x_3840x2160.png`  
   - 用途：高分屏更清晰（同上）

> 说明：MVP 采用“单张完整地图大图”。地标 hover/click 热区由前端用透明层实现；书名/简介不画在图里（用 hover 信息卡展示）。

### 1.3 书籍详情插图（Book Detail Gallery）
> 每本书 3 张（结构：场景外观 / 关键人物氛围 / 高潮意象），16:9，`1920x1080`。

6. `assets/books/book01_roger/scene01_exterior_1920x1080.png`
7. `assets/books/book01_roger/scene02_character_1920x1080.png`
8. `assets/books/book01_roger/scene03_symbol_1920x1080.png`

9. `assets/books/book02_orient/scene01_exterior_1920x1080.png`
10. `assets/books/book02_orient/scene02_character_1920x1080.png`
11. `assets/books/book02_orient/scene03_symbol_1920x1080.png`

12. `assets/books/book03_abc/scene01_exterior_1920x1080.png`
13. `assets/books/book03_abc/scene02_character_1920x1080.png`
14. `assets/books/book03_abc/scene03_symbol_1920x1080.png`

15. `assets/books/book04_nile/scene01_exterior_1920x1080.png`
16. `assets/books/book04_nile/scene02_character_1920x1080.png`
17. `assets/books/book04_nile/scene03_symbol_1920x1080.png`

18. `assets/books/book05_none/scene01_exterior_1920x1080.png`
19. `assets/books/book05_none/scene02_character_1920x1080.png`
20. `assets/books/book05_none/scene03_symbol_1920x1080.png`

21. `assets/books/book06_sun/scene01_exterior_1920x1080.png`
22. `assets/books/book06_sun/scene02_character_1920x1080.png`
23. `assets/books/book06_sun/scene03_symbol_1920x1080.png`

24. `assets/books/book07_announced/scene01_exterior_1920x1080.png`
25. `assets/books/book07_announced/scene02_character_1920x1080.png`
26. `assets/books/book07_announced/scene03_symbol_1920x1080.png`

27. `assets/books/book08_curtain/scene01_exterior_1920x1080.png`
28. `assets/books/book08_curtain/scene02_character_1920x1080.png`
29. `assets/books/book08_curtain/scene03_symbol_1920x1080.png`

## 2) 可选升级（建议 V2）

### 2.1 大门“开门动效”更好做的分层素材（可选）
- `assets/door/door_left_panel_transparent.png`（透明背景，仅左门）
- `assets/door/door_right_panel_transparent.png`（透明背景，仅右门）
- `assets/door/door_interior_glow_background.png`（门后光与雾）

### 2.2 地图分层（Hover 高亮更精细）
- `assets/map/map_base_parchment.png`（仅底图纹理）
- `assets/map/landmarks/landmark_01_roger.png` … `landmark_08_curtain.png`（透明背景地标）
- `assets/map/path_overlay.png` 或前端用 SVG 画路径（推荐）

### 2.3 详情页增强
- 人物头像插图（每本书主要人物若干，或仅侦探形象）
- 详情 Hero 首图（每本书 1 张）

