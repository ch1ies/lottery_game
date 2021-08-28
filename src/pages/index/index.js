// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.css";
import "@/assets/global.css";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
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
// let data = [
//   {
//     id: 1,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 2,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 3,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 4,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 5,
//     name: '666',
//   },
//   {
//     id: 6,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 7,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 8,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },
//   {
//     id: 9,
//     url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
//     name: '666',
//     rate: '0.2'
//   },

// ]
// 

// 
let data = []
const ob = new Observer()

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
  ob.on('canToast', (value) => {
    const item = data[value]
    console.log('item', item)
    console.log(rootElement, 'rootElement')
    ReactDOM.render(
      <App item={item} />,
      rootElement
    );
  })
  // if (lottery.canToast) {
  //   ReactDOM.render(
  //     <Toast />,
  //     rootElement
  //   );
  // }
}
// 定义一进入页面就执行的函数
 function onToThePage() {
  getAllDatas().then(res => {
    data = res
    console.log(data, 'data')
    defineLottery(id, data, ob)
  })
}

onToThePage()