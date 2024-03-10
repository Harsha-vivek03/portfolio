import React from 'react'
import img1 from '../Images/unnamed.png'
import img2 from '../Images/p2.png'
import img3 from '../Images/p3.png'
import img4 from '../Images/p4.png'



import './Projects.css'
import Header from './Header'
const Projects = () => {
  return (
    <div><Header name="Ganesh"/>
    <div className="projects">
      
      <h1>My Projects</h1>
      
  <hr id="line"/>
  <br></br><br></br>
      <div className="mainprojects">
        <div className="p1 project" > <img src={img1} width='60%'></img> 
        <h3>Project1</h3>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
        </div>
        <div className="p2 project " > <img src={img2} width='60%'></img> 
        <h3>Project2</h3>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
        </div>
        <div className="p3 project"> <img src={img3} width='60%'></img> 
        <h3>Project3</h3>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
        </div>
        <div className="p4 project"> <img src={img4} width='60%'></img> 
        <h3>Project4</h3>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eius ipsa ex error dolore accusamus perferendis molestiae dolorem libero magnam repellat iusto optio nisi harum repellendus, laudantium nemo voluptates et. </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
