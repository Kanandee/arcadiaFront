import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import store from './redux/store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
