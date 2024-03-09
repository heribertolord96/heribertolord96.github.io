import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './locale/i18nextInit';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <Provider  store={store} >
                  <App />
            </Provider>
            {/* <MainContainers /> */}
      </BrowserRouter>,
);