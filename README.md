# 音乐社团官网

一个零依赖、可直接部署的响应式单页官网原型。

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

## 替换内容

优先修改 `app.js` 顶部的 `siteData`：

- `name`：社团名称
- `slogan`：社团口号
- `email`：联系邮箱
- `releases`：作品资料
- `artists`：成员资料
- `platforms`：平台名称

社团介绍、活动、招募和联系方式目前直接写在 `index.html` 中，正式资料到位后再统一替换。
