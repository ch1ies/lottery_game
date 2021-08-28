const express = require('express')
const {getAllData, updaeData, computerPrizeRate} = require('../service/index')
const router = express.Router()
router.get('/all', async (req, res) => {
  const list = await getAllData()
  res.send(list)
})

router.post('/update', async (req, res) => {
  const data = req.body
  const list = await updaeData(data)
  res.send(list)
})

router.get('/click', async (req, res) => {
  const prize_id = await computerPrizeRate()
  const obj = {value: prize_id}
  console.log(String(prize_id))
  res.send(obj)  // 不能直接返回数字，会报错
})
module.exports = router