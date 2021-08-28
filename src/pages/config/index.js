
// 引入公共css
import "../common/reset.css";
import "./index.css";
import "@/assets/global.css";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
// 引入react 配置表单页面
import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import App from "./app"

const rootElement = document.getElementById("app");
ReactDOM.render(
  <App />,
  rootElement
);
console.log("关于我们");
