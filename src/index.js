import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateContextProvider } from './context/appContext.jsx'


ReactDOM.render(
      <StateContextProvider>
        <App/>,
      </StateContextProvider>,
    document.getElementById("root")
);