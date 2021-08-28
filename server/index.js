const express = require('express')
const router = require('./router/index')
const app = express()
const port = 8082

app.use(express.urlencoded({
  extended: true,  // 使用qs 库 来进行解析
}))
app.use(express.json())  // 拦截并解析请求体为json 格式的post请求
// app.use(require('./myUrlEncode'))

app.use('/', router)

app.listen(port, (req, res) => {
  console.log('server is listening on' + port)
})
