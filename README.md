# CaelLab Policy

虚舟实验室（CaelLab）政策文档站。集中发布虚舟实验室各项服务（官网、论坛、轻之舟百科、CaelLabID 等）的隐私政策、服务协议、社区守则等公开文档。

线上地址：<https://policy.caellab.org>

## 技术栈

- [Docusaurus 3](https://docusaurus.io/) — 静态文档站
- Node.js ≥ 20
- 部署：GitHub Pages + GitHub Actions 自动构建

## 本地开发

```bash
npm install
npm start
```

本地启动后默认访问 <http://localhost:3000>。

## 文档结构

每个服务对应一个 docs 实例：

```
public-policy/   通用政策中心（首页入口）
www/             官网：隐私政策、第三方信息共享
forum/           论坛：隐私政策、服务协议、社区守则
id/              CaelLabID：隐私政策、服务协议、开发者守则
trust/           信任：公益状态、诚信承诺
```

页面文档为 Markdown，直接编辑即可。新增页面记得同步对应 `sidebars.js`。

## 构建

```bash
npm run build
```

产物输出到 `build/`。

## 部署

推送 `main` 分支后，GitHub Actions 自动执行 [deploy.yml](.github/workflows/deploy.yml)：`npm ci` → `npm run build` → 部署到 GitHub Pages（自定义域名 `policy.caellab.org`）。

- 仓库 Pages 设置：Source 选 **GitHub Actions**
- 自定义域名由 [static/CNAME](static/CNAME) 指定

## 许可

本站文档以 [CC0 1.0](LICENSE) 公开发布，可自由使用、修改与再分发。署名信息参见站点页脚。
