import Lottery from './lottery'
import { computerPrizeRate, getAllData } from '@/api'
import Observer from '../Observer'

// 存放请求到的奖品数据
let data = []

// 中奖概率在服务端配置,根据配置的中奖概率，选出中奖项
const id = "app"
// 事件监听对象
export const ob = new Observer()

// 获取所有奖品信息
function getAllDatas() {
  return getAllData().then(res => {
    return res.data
  })
}

// 定义页面抽奖的dom信息
function defineLottery(id, data, observer) {
  const lottery = new Lottery(id, data, observer, computerPrizeRate)
  const lot = document.getElementById('lottery')
  lot.addEventListener('click', lottery.start.bind(lottery))
}

// 定义一进入页面就执行的函数
function onToThePage() {
  getAllDatas().then(res => {
    data = res
    defineLottery(id, data, ob)
  })
}
export default onToThePage