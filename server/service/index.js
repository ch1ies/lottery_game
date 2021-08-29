// 处理中间业务逻辑
// 定义一个初始化变量，保存数据，没有使用到数据库，所以该数据不是持久化的
const globalData = [
  {
    id: 0,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '66矿石',
    rate: '0.2'
  },
  {
    id: 1,
    url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71c68de6368548bd9bd6c8888542f911~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp",
    name: '随机限量徽章',
    rate: '0.2'
  },
  {
    id: 2,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bf91038a6384fc3927dee294a38006b~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '新款T恤',
    rate: '0.2'
  },
  {
    id: 3,
    url: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4ce25d48b8405cbf5444b6195928d4~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: 'BUG',
    rate: '0.2'
  },
  {
    id: 4,
    name: '免费抽奖：1次',
  },
  {
    id: 5,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '888金币',
    rate: '0.2'
  },
  {
    id: 6,
    url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab31c183950541d4a0731c0b8765b173~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '马克杯',
    rate: '0.2'
  },
  {
    id: 7,
    url: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33f4d465a6a9462f9b1b19b3104c8f91~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '抱枕',
    rate: '0.2'
  },
  {
    id: 8,
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
    name: '666金币',
    rate: '0.2'
  },

]
let globalId = 3 // 中奖的id

// 获取所有奖品数据
exports.getAllData = async function () {
  return new Promise((resolve) => {
    resolve(globalData)
  })
}

// 更新奖品数据
exports.updaeData = async function (data) {
  // 替换图片 
  const {id, prize_id = 1} = data
  console.log(prize_id, "prize_id: ")
  globalId = prize_id
  return new Promise((resolve) => {
    globalData.splice(id , 1, data)
    resolve(globalData)
  })
}
// 查询中奖的奖品信息
exports.findPrizedItem = async function ({value}) {
  console.log(value)
  console.log(globalData, 'globalData')
  const PrizedItem = globalData.filter(item => item.id  === Number(value))
  console.log(PrizedItem)
  return new Promise((resolve) => {
    resolve(PrizedItem)
  })
}
/** 
 *  计算中奖的奖品是哪一项
 * 规则： 存在 globalId，则 globalId 为中奖项
 *       不存在 globalId， 则奖品中中奖概率最高的为中奖项
 * */ 
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
