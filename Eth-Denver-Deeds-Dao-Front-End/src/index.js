import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <App />
      </ThirdwebWeb3Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
