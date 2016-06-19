// Accept hot module reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}

import React                                         from 'react'
import { render }                                    from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App          from './components/app'
import { Projects } from './components/projects'
import { About }    from './components/about'
import { baseName } from './config'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import './components/projects.scss'

render((
  <Router history={browserHistory}>
    <Route path={baseName + '/'} component={App}>

      <IndexRoute component={Projects}/>
      <Route path={baseName + "/about"} component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
