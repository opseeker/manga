import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Manga from './Components/Manga';
import Manhwa from './Components/Manhwa';
import Anime from './Components/Anime';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/manga" element={<Home/>}/>
      <Route exact path="/manga/about" element={<About/>}/>
      <Route exact path="/manga/contact" element={<Contact/>}/>
      <Route exact path="/manga/content=manga" element={<Manga/>}/>
      <Route exact path="/manga/content=manhwa" element={<Manhwa/>}/>
      <Route exact path="/manga/content=anime" element={<Anime/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
