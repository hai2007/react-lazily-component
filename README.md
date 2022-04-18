# react-lazily-component
为React设计的组件懒加载方法，支持jsx和tsx。

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=react-lazily-component"><img src="https://img.shields.io/npm/dm/react-lazily-component.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=react-lazily-component"><img src="https://packagephobia.now.sh/badge?p=react-lazily-component" alt="install size"></a>
  <a href="https://www.npmjs.com/package/react-lazily-component"><img src="https://img.shields.io/npm/v/react-lazily-component.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/react-lazily-component/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/react-lazily-component.svg" alt="License"></a>
  <a href="https://github.com/hai2007/react-lazily-component" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/react-lazily-component?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/react-lazily-component/issues)，欢迎参与维护！

## How to use?
首先你需要通过命令行安装：

```bash
npm install --save react-lazily-component
```

安装好了以后，然后引入后就可以使用了：

```js
import ReactLazilyComponent from 'react-lazily-component'
let Demo = ReactLazilyComponent(() => import('./demo.jsx'))
```

这个Demo就是一个组件，和普通方式引入的组件一样使用即可，不过效果却是懒加载。

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/react-lazily-component/blob/master/LICENSE)

Copyright (c) 2021-2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
