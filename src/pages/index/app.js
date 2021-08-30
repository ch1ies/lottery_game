import React, {useState, useEffect}from 'react'
import {Toast, WinnerList} from "./components/winnerList"
import { ob } from './components/Lottery/lotteryStart'
import { findPrizedItem } from '../../api/index'

export default function App(props) {
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState('')
  const handleVisible = (value) => {
      setVisible(!value)
  }
  useEffect(() => {
    console.log('render again')
    ob.on('canToast', (value) => {
      // 拿到特定id,发送请求
      findPrizedItem({value}).then((res) => {
        if (res.data) {
          res.data = res.data.map((item,index) => Object.assign({}, item, {key: index}))
          setItem(res.data)
          setVisible(true)
        }
      })
    })
  })
  return (
    <div>
      <Toast visible={visible} handleVisible={handleVisible} item={item} />
      <WinnerList item={item} />
    </div>
  )
}
