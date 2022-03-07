import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/manga" element={<App/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);