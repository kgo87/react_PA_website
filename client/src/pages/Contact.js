import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import aboutCardData from "../aboutCardData.json";
import Kat from "../images/kat.png"
import Mike from "../images/mike.jpeg"
import CardDeck from 'react-bootstrap/CardDeck'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

function Contact() {

  return(


<Container>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Kat} />
      <Card.Body>
        <Card.Title>{aboutCardData.kat.name}</Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Mike} />
      <Card.Body>
        <Card.Title>{aboutCardData.mike.name}</Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        <li className="list-inline-item">
                <a href="#!" className="black-text">
                  <MDBIcon fab icon="twitter" className="mr-1" />
                </a>
              </li>
      </Card.Body>
    </Card>


</Container>
   
    )
  }

export default Contact;
