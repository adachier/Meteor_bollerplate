import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/routers/App'

console.log ('Client : meteor est lancé')

ReactDOM.render(
    <App />,
    document.getElementById('root')
)