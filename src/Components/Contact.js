import React from 'react'
import { useState } from 'react';
import Header from './Header'
import './Contact.css'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';



import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AutohideExample() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      
      <Col xs={6}>
        <Button className="send" onClick={() => setShow(true)}>Send Message</Button>
      </Col>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide className="thank">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message Sent</strong>
            <small>1 sec ago</small>
          </Toast.Header>
          <Toast.Body  >Thank You for messaging me , I reach you soon 🤗</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}


function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write Something Here"/>
      </Form.Group>
    </Form>
  );
}



const Contact = () => {
  return (
    <div>
      <Header name="Ganesh"/>
      <div className="contact">
       <h1> Contact Me</h1>
       <hr id="line"/>
       <br/>
       <div className="formsdiv">
          <div id="form1" >
             <TextControlsExample/>
             <AutohideExample/>
          </div>
           

          <div id="form2"> 
          <h2>Get in Touch</h2>
          <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
Simply fill the from and send me an email.</p>
          <p>You can also reach me through...</p>

          <a href="https://facebook.com/"> <FontAwesomeIcon className="icons" icon={faSquareFacebook} /></a>
          <a href="https://www.linkedin.com/in/ganesh-sirla-4a9068296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
          <a href="https://github.com/"> <FontAwesomeIcon className="icons" icon={faSquareGithub} /></a>
          <a href="https://www.instagram.com/ganesh_.sirla?utm_source=qr&igsh=MWE1MHg2eHl2bTVkdw=="><FontAwesomeIcon className="icons" icon={faSquareInstagram} /></a>
          </div>
       </div>
      
        
      <br></br>


      </div>
    </div>
  )
}
export default Contact


