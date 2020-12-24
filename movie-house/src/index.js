import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoviesProvider } from './context';

ReactDOM.render(
  <MoviesProvider>
    <Router>
      <App />
    </Router>
  </MoviesProvider>,
  document.getElementById('root')
);
