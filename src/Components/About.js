import React from 'react'
import Nav from './navigationBar'

const About = () => {
  return (
    <>
    <Nav isAboutActive={true}/>
    <div className="about">
      <div className="header text-center"><h1>About</h1></div>  
    </div>
    </>
  )
}
export default About;
