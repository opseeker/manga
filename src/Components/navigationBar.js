import React from 'react';
import './Css/Navigation.css';
import '../CRes/Color.css'
import {Link} from 'react-router-dom';

const Nav = () => {

  return (
    <div className="navbar">
        <div className="menu">
            <div className="menu-list">
                <div className="menu-items">
                    <Link className="menu-item" to="/manga">home</Link>
                    <Link className="menu-item" to="/manga/about">about</Link>
                    <Link className="menu-item" to="/manga/contact">contact</Link>
                </div>
                <div className="menu-items-1">
                    <Link className="menu-item-1" to="/manga/content=manga">manga</Link>
                    <Link className="menu-item-1" to="/manga/content=manhwa">manhwa</Link>
                    <Link className="menu-item-1" to="/manga/content=anime">anime</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Nav;
