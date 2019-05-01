import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));