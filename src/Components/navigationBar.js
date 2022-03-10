import React from 'react';
import './Css/Navigation.css';
import '../CRes/Color.css'
import {Link} from 'react-router-dom';

const Nav = (props) => {

  return (
    <div className="navbar">
        <div className="menu">
            {props.isRev ? <Rev2/> : <Rev1 isHomeActive={props.isHomeActive} isAboutActive={props.isAboutActive} isContactActive={props.isContactActive} isMangaActive={props.isMangaActive} isManhwaActive={props.isManhwaActive} isAnimeActive={props.isAnimeActive}/> }
        </div>
    </div>
  )
}
export default Nav;

class Rev1 extends React.Component {
    render() {
        return (
            <div className="menu-list">
                <div className="menu-items">
                    <Link className={this.props.isHomeActive?"active":null} to="/manga">home</Link>
                    <Link className={this.props.isAboutActive?"active":null} to="/manga/about">about</Link>
                    <Link className={this.props.isContactActive?"active":null} to="/manga/contact">contact</Link>
                </div>
                <div className="menu-items-1">
                    <Link className={this.props.isMangaActive?"active":null} to="/manga/content=manga">manga</Link>
                    <Link className={this.props.isManhwaActive?"active":null} to="/manga/content=manhwa">manhwa</Link>
                    <Link className={this.props.isAnimeActive?"active":null} to="/manga/content=anime">anime</Link>
                </div>
            </div>
        )
    }
}

class Rev2 extends React.Component {
    render() {
        return (
            <div className="menu-list">
                <div className="menu-items-1">
                    <Link className="menu-item-1" to="/manga/content=manga">manga</Link>
                    <Link className="menu-item-1" to="/manga/content=manhwa">manhwa</Link>
                    <Link className="menu-item-1" to="/manga/content=anime">anime</Link>
                </div>
                <div className="menu-items">
                    <Link className="menu-item" to="/manga">home</Link>
                    <Link className="menu-item" to="/manga/about">about</Link>
                    <Link className="menu-item" to="/manga/contact">contact</Link>
                </div>
            </div>
        )
    }
}