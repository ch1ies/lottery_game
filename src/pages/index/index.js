// 引入公共css
import "../common/reset.css";
import "./index.css";
import "@/assets/global.css";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

// 首页使用的js
import Lottery from './lottery'
import Observer from './Observer'
import {computerPrizeRate, getAllData} from '../../api/index'
import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import App from './app'

const rootElement = document.getElementById("toast");
// const rootElement = document.documentElement

// 中奖概率在服务端配置,根据配置的中奖概率，选出中奖项
const id = "app"

// 存放请求到的奖品数据
let data = []
// 事件监听对象
export const ob = new Observer()

ReactDOM.render(
  <App/>,
  rootElement
)
// 获取所有奖品信息
function getAllDatas () {
    return getAllData().then(res => {
      return res.data
    })
}
// 定义页面抽奖的dom信息
function defineLottery (id, data, observer) {
  const lottery = new Lottery(id, data, observer, computerPrizeRate)
  const lot = document.getElementById('lottery')
  lot.addEventListener('click', lottery.start.bind(lottery))
  // 监听转盘停止的事件
  // ob.on('canToast', (value) => {
  //   const item = data[value]
  //   ReactDOM.render(
  //     <App item={item} />,
  //     rootElement
  //   );
  // })
}
// 定义一进入页面就执行的函数
 function onToThePage() {
  getAllDatas().then(res => {
    data = res
    defineLottery(id, data, ob)
  })
}

onToThePage()