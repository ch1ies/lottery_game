class Scroll {
  constructor(id, data) {
    this.container = document.getElementById(id)
    this.container.innerHTML = this.render(data)
    this.ul1 = document.getElementById("comment1")
    this.ul2 = document.getElementById("comment2")
    this.timer = null
  }
  render(data) {
    const content = data.map(item => {
      return `
        <li>
          <span>${item.name}</span>
          <span>${item.desc}</span>
          <image class='img' src="${item.url}"></image>
        </li>
      `.trim()
    })
    return `
    <ul id="comment1">${content.join('')}</ul>
    <ul id="comment2"></ul>
    `
  }
  start(t=50) {
    console.log('ready to start')
    this.ul2.innerHTML = this.ul1.innerHTML
    this.container.scrollTop = 0 // 开始无滚动时设为0
    console.log(this.container.scrollTop, 'this.container')
    const self = this
    // 鼠标移入div时暂停滚动
    this.container.onmouseover = () => {
      clearInterval(this.timer)
    }
    // 鼠标移出div后继续滚动
    this.container.onmouseout = () => {
      this.timer = setInterval(this.scroll.bind(this), t)
    }
    // 注意this 指向问题
    this.timer = setInterval(this.scroll.bind(this), t)
  }
  scroll() {
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (this.container.scrollTop >= this.ul1.scrollHeight) {
      this.container.scrollTop = 0
    } else {
      this.container.scrollTop++
    }
  }
}

export default Scroll