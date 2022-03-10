import React from 'react';
import logo from './logo.svg';
import './Home.css';
import './CRes/Res1.css';
import './CRes/Color.css';
import Nav from './Components/navigationBar';


function Home(props) {
  return (
    <>
    <Nav isHomeActive={true}/>
    <Background/>
    <Foreground version={props.version}/>
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
          <h1 className="text-center fw-300 dis-f uppercase">Celebrating the Newly Launched Application's Success</h1>
          <p className="pad-1e text-center fw-250 fs-1-3">
            The newly launched application is being continously updated to meet the user quality. I am very sorry if any dissapoinment has been seen.
            One of the reasons for this application to be made is simply TESTING...
          </p>
          <p className="text-center pad-10p fw-300 fs-1-2">
            For updates on the main application, you can go to the <a href="https://opseeker.github.io/" className="no-decoration fw-bold fs-1-3" style={{color:"green"}} >SITE</a> and check if any updates are provided. For complaints on the app's performance, leave a mail to me.
          </p>
        </div>
        <div className="footer">
          <p className="">
            <span className="copyright">&copy; Copyrights by Ankit Saikia</span>
            <br/>
            version -&nbsp;
            <span className="version">{this.props.version}</span> 
          </p>  
        </div>
      </div>
    )
  }
}


Home.defaultProps = {
  version: '0.2.0'
}