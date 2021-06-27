import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutCardData from "../aboutCardData.json";
import Kat from "../images/kat.png"
import Mike from "../images/mike.png"
import Steve from "../images/steve.jpeg"
import Alex from "../images/alex.png"
import CardDeck from 'react-bootstrap/CardDeck'
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";


function Contact() {

    return (


        <Container>
<CardDeck>
  <Card>

    <Card.Img variant="top" src={Mike} />
    <Card.Body>
      <Card.Title>{aboutCardData.mike.name}</Card.Title>
      <Card.Text> Predictive Analytics CoP GTL </Card.Text>
      <hr />
      <a href = {aboutCardData.mike.linkedin} target = "blank">
      <MDBIcon size='2x' fab icon="linkedin" className="mr-2" /> </a>   
      <a href = {aboutCardData.mike.email} target = "blank">
      <MDBIcon size='2x' icon="envelope" /> </a>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Steve} />
    <Card.Body>
      <Card.Title>{aboutCardData.steve.name}</Card.Title>
      <Card.Text> AI/ML CoP GTL </Card.Text>
      <hr />
      <a href = {aboutCardData.steve.linkedin} target = "blank">
      <MDBIcon size='2x' fab icon="linkedin" className="mr-2" /> </a>   
      <a href = {aboutCardData.steve.email} target = "blank">
      <MDBIcon size='2x' icon="envelope" /> </a>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Kat} />
    <Card.Body>
    <Card.Title>{aboutCardData.kat.name}</Card.Title>
      <Card.Text> Engineering Support</Card.Text>
      <hr />
      <a href = {aboutCardData.kat.linkedin} target = "blank">
      <MDBIcon size='2x' fab icon="linkedin" className="mr-2" /> </a>  
      <a href = {aboutCardData.kat.email} target = "blank">
      <MDBIcon size='2x' icon="envelope" /> </a>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Alex}/>
    <Card.Body>
      <Card.Title>{aboutCardData.alex.name}</Card.Title>
      <Card.Text> Environmental Data Science CoP GTL</Card.Text>
      <hr />
      <a href = {aboutCardData.alex.linkedin} target = "blank">
      <MDBIcon size='2x' fab icon="linkedin" className="mr-2" /> </a>   
      <a href = {aboutCardData.alex.email} target = "blank">
      <MDBIcon size='2x' icon="envelope" /> </a>
    </Card.Body>
  </Card>
</CardDeck>

</Container>

   
    )
}

export default Contact;
