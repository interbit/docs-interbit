import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// ...

import 'interbit-ui-components/dist/css/interbit.css'
import App from './App'
// ...

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)