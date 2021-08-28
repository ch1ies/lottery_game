// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  config: {
    js: "./src/pages/config",
    html: "./src/pages/config/index.html",
    out: "config.html",
  },
};
