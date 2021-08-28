import React from 'react'
import { Modal, Button } from 'antd'
export const Toast =  (props) => {
  const { visible, handleVisible, item} = props
  const handleOk= () => {
    handleVisible && handleVisible(visible)
  }
  return (
    <div>
       <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleOk}>
       <div className="turntable-item item">
          <div className="image">
            <img src={item.url} />
          </div>
          <div className="text">${item.name}</div>
        </div>
      </Modal>
    </div>
  )
}

export const WinnerList = (props) => {
  return (
    <div></div>
  )
}

