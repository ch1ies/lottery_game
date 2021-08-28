import { Table, Tag, Space } from 'antd';
import React, {useEffect, useState} from 'react';
import { getAllData } from '../../api/index'
 
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: text => <a>{text}</a>,
  },
  {
    title: '图片名称',
    dataIndex: 'name',
    key: 'name',
    width:100,
    align: 'center',
  },
  {
    title: '图片路径',
    dataIndex: 'url',
    key: 'url',
    align: 'center',
  },
  {
    title: '中奖概率',
    dataIndex: 'rate',
    key: 'rate',
    width: 100,
    align: 'center',
  },
];

// const data = [
//   {
//     id: '1',
//     key: '1',
//     name: 'John Brown',
//     rate: 32,
//     url: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     id: '2',
//     key: '2',
//     name: 'Jim Green',
//     rate: 42,
//     url: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     id: '3',
//     key: '3',
//     name: 'Joe Black',
//     rate: 32,
//     url: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const table = (props) => {
  // 是否有修改，有修改就请求新数据
  const [data, setData] = useState([])
  const {loader = ''} = props
  // 发送请求数据
  useEffect(() => {
    getAllData().then(res => {
      res.data = res.data.map((item,index) => Object.assign({}, item, {key: index}))
      console.log(res.data)
      setData(res.data)
      console.log(data, 'data')
      // data = res.data
    })
  }, [loader])
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default table