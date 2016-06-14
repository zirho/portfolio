// Accept hot module reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}

import 'bootstrap/dist/css/bootstrap.min.css'

console.log('a')

