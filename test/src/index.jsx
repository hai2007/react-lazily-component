import React from "react"
import ReactDOM from 'react-dom'
import ReactLazilyComponent from 'react-lazily-component'

// 样式
import '@hai2007/style/normalize.css'

// 页面
let Demo = ReactLazilyComponent(() => import('./demo.jsx'))

ReactDOM.render((
    <div className='view'>
        <Demo />
    </div>
), document.getElementById('root'))
