import React from 'react'
import { Modal, Table } from 'antd'
 
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: text => <a>{text}</a>,
  },
  {
    title: '奖品名称',
    dataIndex: 'name',
    key: 'name',
    width:100,
    align: 'center',
  },
  {
    title: '奖品',
    dataIndex: 'url',
    key: 'url',
    align: 'center',
    render: (url) => {
      return (
        <>
          <img className="img" src={url}/>
        </>
      )
    }
  }
]
// 抽中奖品的展现层
export const Toast =  (props) => {
  const { visible, handleVisible, item} = props
  console.log(item[0], 'item')
  const handleOk= () => {
    handleVisible && handleVisible(visible)
  }
  return (
    <div>
       <Modal title="恭喜获得此奖品" visible={visible} onOk={handleOk} onCancel={handleOk}>
       <div className="turntable-item item">
          <div className="img">
            <img src={ item[0]? item[0].url : ''} />
          </div>
          <div className="text">${item[0] ? item[0].name : ''}</div>
        </div>
      </Modal>
    </div>
  )
}

// 显示所有抽中的奖品
export const WinnerList = (props) => {
  return (
    <Table columns={columns} dataSource={props.item} />
  )
}

