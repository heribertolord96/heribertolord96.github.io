import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { store } from './store';
import { App } from './App';
// import MainContainers from './MainContainers';
// import './main.css';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import './locale/i18nextInit';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
//   <BrowserRouter>
      <App />
//   {/* </BrowserRouter>, */}
  // </React.StrictMode>,
);