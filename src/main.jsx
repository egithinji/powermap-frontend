import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import '../index.css'
import store from './app/store'


if (process.env.NODE_ENV === 'development') {
  const {worker} = await import("./mocks/browser")
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)