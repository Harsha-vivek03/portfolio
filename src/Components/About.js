import React from 'react'
import './About.css'
import Header from './Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (

    <div><Header name="Ganesh"/>
    <div className="about">
      <h1>About Me</h1>
      <hr id="line"/> <br/>
       
      <div className="maindiv">
          <div className="divs">
            <div><p class="subhead">Personal Info</p> </div>
             <div className="div">
                <ul className="fiul">
                    <li> <FontAwesomeIcon className="iconss" icon={faUser} />  Sirla Ganesh</li>
                    <li><FontAwesomeIcon className="iconss" icon={faEnvelope} />  ganeshsirla87@gmail.com</li>
                    <li><FontAwesomeIcon className="iconss" icon={faPhone} />  9381063100</li>

                    <li><FontAwesomeIcon className="iconss" icon={faHashtag} />  23VV1A1249</li>
                </ul><br></br><br></br><br></br><br></br>
             </div>
             </div>

             <div className="divs">
             <div><p class="subhead">Education</p> </div>
             <div className="div">
                <ul className="twul">
                    <li>Bachelor Of Technology</li>
                   
                    <p>Present I am persuing B.Tech 1st year , IT department in Jawaharlal Nehru Technological University -Gurajada , vizianagaram</p>
                    <li>Intermediate</li>
                    <p>I have completed my Intermediate in Padmavati Junior College , Narasannapeta with 957 marks in the year 2023</p>
                    <li>High School</li>
                    <p> I completed my secondary education in ZPH School , Urlam with 589 marks in the year 2019</p>
                  </ul><br></br><br></br><br></br><br></br>
             </div>
          </div>
          <div className="divs">
            <div><p class="subhead">Skills</p> </div>
             <div className="div">
                <ul className="thul">
                    <li>C,Python Programming</li>
                    <div class="skills"><div class="c">70% </div></div>
                    <li>Web Designing</li>
                    <div class="skills"><div class="web">80% </div></div>
                    <li>Microsoft Excel</li>
                    <div class="skills"><div class="micro">70% </div></div>
                    <li>Good communication</li>
                    <div class="skills"><div class="comm">90% </div></div>
                    <li>Time Mangement</li>
                    <div class="skills"><div class="time">98% </div></div>
                    <li>Data Analytics</li>
                    <div class="skills"><div class="data">60% </div></div>
                    <li>Data Structures</li>
                    <div class="skills"><div class="structure">70% </div></div>
                </ul><br></br><br></br><br></br><br></br>
             </div>
             </div>

             <div className="divs">
            <div><p class="subhead">Certifications</p> </div>
             <div className="div">
                <ul className="foul">
                    <li>Front End development ,IBM skillbuild</li>
                    <li>Java Foundation , Oracle</li>
                    <li>C Language , codenz</li>
                    <li>Microsoft Certified , Azure Administrator Associate</li>
                    <li>Aws Cloud Essentials, Amazon</li>
                    <li>Python ,Syncinterns</li>
                    <li>Web Development , Oasis Foundation</li>
                </ul>
             </div>
             </div>
      
      

</div>
    </div>
    </div>
  )
}

export default About
