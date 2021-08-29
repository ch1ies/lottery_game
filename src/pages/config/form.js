import React, {useState} from "react"
import { Form, Input, Button, message} from 'antd'
import { updaeData } from "../../api/index"
const form = (props) => {
  const {callback} = props
  const formRef = React.createRef()
  // const [visible, setVisible] = useState(false)
  const info = () => {
    message.success('更新成功')
  }

  const onFinish = (values) => {
    if (+values.id === 4) {
      message.error('图片id不能为4')
      return 
    }
    if (+values.id < -1 || +values.id > 8) {
      message.error('更新失败，id 越界')
      return 
    }
    values.id = Number(values.id)
    updaeData(values).then(res => {
      console.log(values, 'values')
      formRef.current.resetFields()
      info()
      callback && callback(res)
    })

  };
  const onreset = () => {
    formRef.current.resetFields()
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
  <div>
    <Form
      ref={formRef}
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
    <Form.Item
        label="图片id"
        name="id"
        rules={[
          {
            required: true,
            message: "请输入图片id",
          },
        ]}
      >
        <Input allowClear placeholder='请输入图片id' />
      </Form.Item>
      <Form.Item
        label="图片路径"
        name="url"
        rules={[
          {
            required: true,
            message: "请输入图片路径",
          },
        ]}
      >
        <Input allowClear placeholder='请输入图片路径' />
      </Form.Item>
      <Form.Item
        label="图片名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入图片名称',
          },
        ]}
      >
         <Input allowClear placeholder='请输入图片名称' />
      </Form.Item>
      <Form.Item
        label="中奖概率"
        name="rate"
        rules={[
          {
            required: true,
            message: '请输入中奖概率',
          },
        ]}
      >
         <Input allowClear placeholder='请输入中奖概率' />
      </Form.Item>
      <Form.Item
        label="指定中奖id"
        name="prize_id"
        rules={[
          {
            message: '请输入指定中奖id',
          },
        ]}
      >
         <Input allowClear placeholder='请输入中奖概率' />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 3,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" onClick={onreset}>
          reset
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};

export default form;