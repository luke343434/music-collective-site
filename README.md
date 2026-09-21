# 模糊框架 obscuRE TRAX 官网

一个零依赖、可直接部署的响应式独立音乐厂牌官网。

## 本地预览

可直接打开 `index.html`，或在当前目录启动任意静态文件服务器，例如：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 公网部署

项目已包含适用于 Cloudflare Pages、GitHub Pages、Netlify 和 Vercel 的静态部署文件。
直接将整个目录作为站点根目录发布即可，不需要构建命令。

- 构建命令：留空
- 输出目录：`.`
- Node.js：不需要

## 内容维护

作品、成员和平台信息集中维护在 `app.js` 顶部的 `siteData`：

- `name`：社团名称
- `slogan`：社团口号
- `releases`：作品资料
- `artists`：成员资料
- `platforms`：平台名称

厂牌介绍、理念、事务与联系方式位于 `index.html`。网页使用的优化图片位于 `assets`，`图片`目录保留原始素材且不会上传。

## Quiddity:2 发行资料

于 2026-09-21 核对网易云音乐厂牌专辑记录及厂牌 Dizzylab 发布页：

| 作品 | 编号 | 发行日期（北京时间） | 曲目数 | 网易云音乐 | 厂牌发布页 |
| --- | --- | --- | --- | --- | --- |
| Quiddity:2「PART A」 | obs-CD06A | 2026-08-21 | 11 | [收听](https://music.163.com/album?id=393763480) | [Dizzylab](https://www.dizzylab.net/d/obs-CD06A/) |
| Quiddity:2「PART B」 | obs-CD06B | 2026-08-21 | 12 | [收听](https://music.163.com/album?id=393903766) | [Dizzylab](https://www.dizzylab.net/d/obs-CD06B/) |

名称、网易云专辑 ID、发行时间和曲目数来自[网易云音乐官方专辑接口](https://music.163.com/api/artist/albums/123493084?limit=100&offset=0)。两张专辑的 `publishTime` 均为 `1787241600000`，按北京时间换算为 2026-08-21。编号和风格参考厂牌 Dizzylab 页面；Part B 的 Dizzylab 页面发布于 8 月 22 日，但专辑发行日期为 8 月 21 日。
