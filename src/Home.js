import React from 'react';
import logo from './logo.svg';
import './Home.css';
import './CRes/Res1.css';
import './CRes/Color.css';
import Nav from './Components/navigationBar'


function Home() {
  return (
    <>
    <Nav/>
    <Background/>
    <Foreground/>
    </>
  );
}
export default Home;

class Background extends React.Component {
  render() {
    return (
      <div className="bg-animation">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

class Foreground extends React.Component {
  render () {
    return (
      <div className="foreground">
        <div className="section-1">
          <h1 className="text-center fw-200 dis-f">Celebrating the Newly Launched Application's Success</h1>
          <p className="pad-1em text-center fw-300">The newly launched application is being continously updated to meet the user quality.</p>
        </div>
      </div>
    )
  }
}