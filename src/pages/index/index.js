// 引入公共css
import "../common/reset.css";
import "./index.css";
import "@/assets/global.css";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

// 首页使用的js
import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import App from './app'
import onToThePage from './components/Lottery/lotteryStart'
import defineScroll from './components/Scroll/scrollStart'

const rootElement = document.getElementById("toast");

// 转盘初始化函数
onToThePage()
const scroll = defineScroll()
scroll.start()
// 转盘下的表格初始化渲染函数
ReactDOM.render(
  <App/>,
  rootElement
)