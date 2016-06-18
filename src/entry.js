// Accept hot module reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import App                                           from './components/app'
import React                                         from 'react'
import { render }                                    from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Projects }                                  from './components/projects'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects}/>
    </Route>
  </Router>
), document.getElementById('app'))
