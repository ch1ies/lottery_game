# 使用webpack + express 搭建的多页应用程序
- webpack
- express
- React
- antd

# 目录结构
```shell
├── LICENSE
├── README.md
├── package.json
├── pages.js
├── postcss.config.js
├── public
│   └── favicon.ico
├── server   // 后台服务器
│   ├── index.js
│   ├── router  // 路由层
│   │   └── index.js
│   └── service  // 服务层
│       └── index.js
├── src  // 前台页面
│   ├── api  // 接口请求
│   │   ├── axios.js
│   │   └── index.js
│   ├── assets 
│   │   └── global.css // 全局css
│   └── pages 
│       ├── common // 公共页面
│       ├── config  // 配置页面
│       └── index  // 抽奖页面
├── webpack.config.js
├── webpack.dev.js
├── webpack.prod.js
├── yarn-error.log
└── yarn.lock
```

## 页面说明
### pages/config
   - 配置奖品页面
   - react + antd 实现单页面
   - 需要填写的参数
      - url: 图片路径 （绝对路径）
      - name: 奖品名称
      - rate: 中奖概率
      - id: 直接指定中奖id
### pages/index
   - 抽奖页面
   - 使用js封装抽奖构造函数，传入相应的配置，实现抽奖
# 使用方式
1. 从`git`拉取工程：

   ```shell
   
   ```

2. 安装依赖：

   ```shell
   cd Lottery2
   npm install | yarn install
   ```

3. 运行：

   ```shell
   前端页面运行： npm run dev | yarn run dev  // 端口8080
   后端页面也行： npm run server | yarn run server // 端口8082
   同时运行： npm start | yarn start
   ```

4. 打包：

   ```shell
   npm run build | yarn run build
   ```



