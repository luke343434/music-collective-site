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
