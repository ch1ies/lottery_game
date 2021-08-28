import React from 'react'
import { Card } from 'antd'
// 配置选项说明
const content = () => {
  return (
  <div className="site-card-border-less-wrapper">
    <Card title="规则" bordered={false} style={{ width: 300 }}>
      <p>1.表单项:当指定中奖id 不填时，默认按照选择中奖概率最高的</p>
      <p>2.表格项: 显示目前配置好的各项图片信息</p>
    </Card>
  </div>
  )
}

export default content