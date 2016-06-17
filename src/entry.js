// Accept hot module reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import React    from 'react'
import ReactDOM from 'react-dom'

import { Projects } from './components/projects'
import './components/projects.scss'

ReactDOM.render(
  <Projects />, document.getElementById('content')
)
