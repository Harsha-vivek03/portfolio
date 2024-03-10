import React from 'react'
 import './Home.css'
 import img1 from '../Images/image1.jpg';
import img2 from '../Images/ganesh.jpg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = (props) => {

    useEffect(()=>{

        ScrollReveal({ 
          reset: true ,
          distance: '100px',
          duration:2500,
          delay:400
          });
      
          ScrollReveal().reveal('#img1', { distance: '400px',delay: 100,origin:'right' });
      
      })


  return (
<div>
    <Header name="Ganesh"/>
    <div className="home" >
<img id='img1' src={img2} height='90%' width='30%' align='right'/>

      <h1>I am {props.name} </h1>
      <p className="pp">
      I'm an Information Technology student at JNTUGV Vizianagaram. My roll number is 23VV1A1249. I come from a supportive family. My father, Sirla Bhagavan, is a farmer, and my mother, Sirla Chinnammudu, is a homemaker. I have a younger sister, Sirlayamani, who is currently in 10th grade at ZPHS School, Urlam. My long-term goal is to become a Navy Officer.
</p>
    <div className="bgroup">
    <button className="btns"><Link className="link" to="/projects"> My Portfolio</Link></button>
    <button className="btns"><Link className="link" to="/about"> About</Link></button>
    </div>
    </div>
    </div>
  )
}

export default Home
