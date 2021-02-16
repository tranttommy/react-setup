import React from 'react'
import { render } from 'react-dom'
import App from './App'
console.log('index reload')
render(<App message="Hello World" />, document.getElementById('root'))
