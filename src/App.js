import React, { Component } from 'react';
import logo from './logo.svg';
import profileimg from './profileimg.gif';

import Skill from './components/Skill'
import ProfileDetail from './components/ProfileDetail'
import Experience from './components/Experience'
import Education from './components/Education'

import './App.css';
import { unlink, link } from 'fs';

class App extends Component {

  render() {
    return (
      <div className="App">

        <section className="Side-bar">
        <div className="Section Profile-section">
        <img src="http://me.bowlingnoi.com/images/bowlingnoi_1.jpg?v=0.00001" className="Profile-img" alt="Apichaya Wisitphornanan" />
          <h3 className="Profile-name font-ms">Apichaya Wisitphornanan</h3>
          <h4 className="Profile-title">Full Stack Developer</h4>

          <ProfileDetail title="Email" value="wi.apichaya@gmail.com" ></ProfileDetail>
          <ProfileDetail title="Mobile" value="086-897-8982" ></ProfileDetail>
          <ProfileDetail title="Address" value="Sathorn House Condo, Silom, Bangrak, Bangkok" ></ProfileDetail>

          <div className="Profile-social">
            <a href="https://github.com/bowlingnoi" 
              target="_blank"
              title="https://github.com/bowlingnoi">
              <i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/bowlingnoi" 
              target="_blank"
              title="https://www.facebook.com/bowlingnoi">
              <i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/wi-apichaya/"
              target="_blank"
              title="https://www.linkedin.com/in/wi-apichaya/">
              <i className="fab fa-linkedin"></i></a>
            <a href="http://me.bowlingnoi.com/"
              target="_blank"
              title="http://me.bowlingnoi.com/">
              <i class="fas fa-desktop"></i></a>
          </div>
        </div>

        <div className="Section About-section">
          <h2 className="font-ms title">About me</h2>
          <p>I like to solve problem and learn new things.</p>
          <p>And I like to share knowledge when I learn new things</p>
          <p>I am happy when I develop and maintain some products that can solve real problem.</p>
        </div>

        <div className="Section Skill-section">
          <h2 className="font-ms title">Technical Skill</h2>
          <Skill title="HTML/CSS" score="4.5"/>
          <Skill title="Javascript" score="4"/>
          <Skill title="PHP/Framework" score="4.5"/>
          <Skill title="SQL/MySql" score="4.5"/>
          <Skill title="Database Design" score="4.5"/>
        </div>

        <div className="Section Skill-section">
          <h2 className="font-ms title">Others Skill</h2>
          <Skill title="UX/UI" score="4.5"/>
        </div>

        <div className="Section Skill-section">
          <h2 className="font-ms title">Language Skill</h2>
          <Skill title="Thai(Native)" score="5"/>
          <Skill title="English" score="3.5"/>
          
        </div>

        </section>
        
        <section className="Content-bar">
          <div className="Section Experience-section">
            <h2 className="font-ms title">Experience</h2>
            
            <Experience title="SHIPPOP" year="2016-Present" position="CTO"></Experience>
            <Experience title="Dek-D Interactive" year="2012-2017" position="Senior Web Developer"></Experience>
            <Experience title="Faculty of Information and Technologies" year="2012" position="Internship"></Experience>
            
          </div>

          <div className="Section Education-section">
            <h2 className="font-ms title">Education</h2>

            <Education degree="Master's Degree, MBA (International College)" year="2017-2018" faculty="Mahidol University (International College)"></Education>
            <Education degree="Bachelos Degree, Information Communication and Technology" year="2008-2012" faculty="Mahidol University"></Education>
          </div>

          <div className="Section Interest-section">
            <h2 className="font-ms title">Interests</h2>

            <div className="row">
              <div className="col-md-12"><i class="fas fa-ellipsis-h"></i></div>
            </div>
            
            
          </div>

        </section>
        
      </div>
    );
  }
}

export default App;
