import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import './index.scss'
import './index.css'

class App extends Component {
  render() {
    return (
      <p>Hello World1121
        <a href="##">hellllllll</a>
      </p>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#react-entry'))