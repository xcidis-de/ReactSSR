import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const isServer = typeof window !== 'undefined'

ReactDOM.render(
    <App />,
    !isServer && document.getElementById('root')
)
