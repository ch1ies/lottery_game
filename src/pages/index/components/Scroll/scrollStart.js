import Scroll from './infiniteScroll'

// 存放请求到的奖品数据
let scrollData = [
  { name: '恭喜：vary', desc: '获得666金豆', url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：tom', desc: '获得随机限量徽章', url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71c68de6368548bd9bd6c8888542f911~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp" },
  { name: '恭喜：merry', desc: '获得奖品', url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：jhon', desc: '获得66金豆', url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：icon', desc: '获得马克杯', url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab31c183950541d4a0731c0b8765b173~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：rick', desc: '获得新款T恤', url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bf91038a6384fc3927dee294a38006b~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：krle', desc: '获得888金豆', url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
  { name: '恭喜：mogen', desc: '获得BUG一个', url: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4ce25d48b8405cbf5444b6195928d4~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp' },
]

const scrollId = 'review_box'

// 定义页面抽奖的dom信息
function defineScroll() {
  const scroll = new Scroll(scrollId, scrollData)
  return scroll
}
export default defineScroll