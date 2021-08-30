// 发布-订阅模式，实现事件监听
class Observer {
  constructor() {
    this.event = []
  }
  on(type, callback) {
    if (this.event[type] && this.event[type].length > 0) {
      this.event[type].push(callback)
    } else {
      this.event[type] = []
      this.event[type].push(callback)
    }
  }
  emit(type, value) {
    if (this.event[type].length > 0) {
      for (var i = 0; i < this.event[type].length; i++) {
        this.event[type][i](value)
      }
    }
  }
}

export default Observer