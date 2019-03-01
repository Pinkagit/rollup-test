# Fingerprint 文档

## 安装

### 包含文件:
```html
  <script src="Fingerprint.min.js"></script>
```

### 模块引入:
```js
     import Fingerprint from 'Fingerprint.min.js'
  or const Fingerprint = require('Fingerprint.min.js')
```
## 使用

### 获取浏览器指纹:
```js
  Fingerprint.get().then(v => {
    // do something
  })
```
### 若在初始页面加载时获取浏览器指纹，请使用init, 以避免生成不同指纹
```js
  Fingerprint.init().then(v => {
    // do something
  })
```
### 可选参数 details , 返回详细参数
```js
  Fingerprint.get("details").then(v => {
    // do something
  })

  Fingerprint.init("details").then(v => {
    // do something
  })
```

## 样例
```js
  import Fingerprint from 'Fingerprint.min.js'

  Fingerprint.init().then(v => {
    console.log(v) // {fp: "55f86be5640588af5d7f39b3878cb28b"}
  })

  Fingerprint.init("details").then(v => {
    console.log(v)
    /* 
    {
      fp: "55f86be5640588af5d7f39b3878cb28b",
      components: [
        {key: "language", value: "zh-CN"},
        {key: "colorDepth", value: 24},
        ...
      ]
    }
     */
```

