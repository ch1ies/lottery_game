// 处理中间业务逻辑
// 定义一个初始化变量，保存数据，没有使用到数据库，所以该数据不是持久化的
const globalData = [
  {
    id: 1,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 2,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 3,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 4,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 5,
    name: '666',
  },
  {
    id: 6,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 7,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 8,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },
  {
    id: 9,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666',
    rate: '0.2'
  },

]
let globalId = 3 // 中奖的id

exports.getAllData = async function () {
  return new Promise((resolve) => {
    resolve(globalData)
  })
}

exports.updaeData = async function (data) {
  // 替换图片 
  const {id, prize_id = 1} = data
  console.log(prize_id, "prize_id: ")
  globalId = prize_id
  return new Promise((resolve) => {
    globalData.splice(id - 1, 1, data)
    resolve(globalData)
  })
}
 
exports.computerPrizeRate = async function () {
  // 根据配置概率计算中奖的选项
  if (globalId) {
    return Promise.resolve(globalId)
  }
  //选择选项配置的概率最高的那个
  const newData = globalData.map(item => {item.rate})
  const max = newData.sort((a,b) => a - b)
  const prize_item = globalData.filter(item => item.rate === max)
  return Promise.resolve(prize_item.id)
}