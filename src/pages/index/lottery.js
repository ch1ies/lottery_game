class Lottery {
  constructor(id, opt, observer,lotteryClick) {
    this.container = document.getElementById(id);
    this.items = null // 所有子元素
    this.options = opt || []; // 配置选项
    this.container.innerHTML = this.render(opt)
    this.isTurnOver = true // 转圈是否完成的状态
    this.lotteryClick = lotteryClick //后端返回计算后中奖id 的方法 
    this.canToast = false  // 是否抽奖完成，提示中奖信息
    this.observer = observer
  }
  // 根据配置渲染页面
  render(data) {
    const content = data.map(item => {
      if (item.url) {
        return `
        <div class="turntable-item item">
          <div class="image">
            <image src=${item.url} />
          </div>
          <div class="text">${item.name}</div>
        </div>
        `.trim()
      } else {
        return `
        <div class="turntable-item item" id="lottery">
          <div class="image">
          点我抽奖
          </div>
        <div class="text">${item.name}</div>
        </div>`.trim()
      }
    }
    )
    return ` <div class="item-container">${content.join('')}</div>`
  }
  // 点击开始
  start() {
    this.canToast = false
    console.log(this, 'this.isTurnOver')
    if (this.isTurnOver) {
      this.isTurnOver = false
      // 向服务器发送请求，服务器进行抽奖，假设服务器返回prize_id
      this.lotteryClick().then(res => {
        this.prize_id =  +res.data.value // 字符串转为数字
        console.log(this.prize_id, 'this.prize_id')
        this.lottery()
      })
      // 调用抽奖方法
    } else {
      console.log('请勿重复点击')
    }
  }
  // 抽象旋转的动画
  lottery() {
    console.log('中奖ID为'+ this.prize_id)
    // 定义一个数组，数组的长度是旋转的圈数，数组中数字的大小表示从一个奖品到下一个奖品的时间
    let rotate_arr = [90, 80, 70, 60, 50, 50, 50, 100, 150, 250]
    // 旋转的总圈数
    let rotateCircles = rotate_arr.length 
    // 转一圈所需要的时间
    let interval = 0
    // 所哟的dom子元素
    this.items = Array.from(document.querySelectorAll('.turntable-item'))

    console.log(this.items, this.items)
    rotate_arr.forEach( (delay, index) => {
      setTimeout(() => {
        this.rotateOne(delay, index + 1, rotateCircles, this.prize_id)
      }, interval)
      // 每一圈所需要的时间不一样，因此需要做下叠加操作
      interval += delay * 8
    })
  }
  // 旋转一圈的动画
  /**
   * 
   * @param {*} delay  从当前项到下一项的时间间隔
   * @param {*} index  旋转旋转到的第几圈
   * @param {*} rotateCircles 旋转的总圈数
   * @param {*} prize_id 中奖的id
   */
  rotateOne(delay, index, rotateCircles, prize_id) {
    // 动画按顺时针执行
    /**
      0  3  6
      1     7
      2  5  8
     */
    let ArrRotateOrder = [0 ,3 ,6, 7, 8, 5, 2, 1]
    // 页面奖品的总数组 this.options
    // let price_arr = this.options

    // 转到最后一圈，把奖品总数组的最后一项设置为中奖id 对应的项
    if (index === rotateCircles) {
      let index = ArrRotateOrder.indexOf(this.prize_id)
      console.log(index, 'index')
      // 如 prize_id = 7 则最后一圈的尾项应该是7 即：ArrRotateOrder = [0,3,6,7]
      ArrRotateOrder.splice(index + 1) // 
    }
    for (let i = 0; i < ArrRotateOrder.length; i++) {
      setTimeout(() => {
        //以及设置当前项的选中状态，清理掉其他项选中的状态，
        this.setState(this.items, ArrRotateOrder[i])
        // 如果转到最后以前，且转完了，把抽奖状态设置结束
        if (index === rotateCircles && i === ArrRotateOrder.length - 1) {
          console.log('done')
          // 定义一个状态，外层判断是否旋转完成
          this.canToast = true
          this.observer.emit('canToast', this.prize_id)
          this.isTurnOver = true
        }
      }, delay * i);
    }
  }
  // 操作dom,设置样式
  setState(nodeLists, index) {
    for (let i = 0; i < nodeLists.length; i++) {
      // console.log(i)
      if (i === index ) {
        nodeLists[i].classList.add('lotteryBg')
      } else {
        nodeLists[i].classList.remove('lotteryBg')
      }
    }
    this.items = nodeLists
  }
}

export default Lottery