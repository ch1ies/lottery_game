import React, {useState} from 'react'
import { Divider } from 'antd';
import From from "./components/form"
import Table from "./components/table"
import Content from './components/content'
 const App = () => {
 const [loader, setLoader] = useState(false)
 const callback = () => {
   setLoader(!loader)
 }
  return (
    <div className="wrapper">
      <Divider plain>表单</Divider>
      <div className="wrapper-content">
        <From callback={callback}/>
        <Content />
      </div>
      <Divider plain>表格</Divider>
      <div>
      <Table loader={loader} />,
      </div>
    </div>
  )
}

export default App