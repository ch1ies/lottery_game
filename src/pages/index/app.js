import React, {useState, useEffect}from 'react'
import {Toast} from "./winnerList"

export default function App(props) {
  const [visible, setVisible] = useState(true)
  const handleVisible = (value) => {
    // if (value) {
      setVisible(!value)
    // }
  }
  useEffect(() => {
    // console.log(visible, 'visible')
    setVisible(!visible)
  }, [props])
  return (
    <div>
      <Toast visible={visible} handleVisible={handleVisible} item={props.item} />
    </div>
  )
}
