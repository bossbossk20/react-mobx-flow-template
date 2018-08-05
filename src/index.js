import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import registerServiceWorker from './core/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./core/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}