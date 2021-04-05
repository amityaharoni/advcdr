import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import configureStore, { history } from './configureStore'

const store = configureStore()
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./components/App', () => {
    render()
  })
}