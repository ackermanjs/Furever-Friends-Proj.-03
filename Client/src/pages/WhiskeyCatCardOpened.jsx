import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/CatCardOpened.css";
import WhiskeyAvatar from "../images/WhiskeyAvatarVariation1Bigger.png";


const WhiskeyCatCardOpened = () => {
  return (
    <div className="catcardopened-section">
      
      <Card className="shadow-lg" style={{ width: '30rem' }}>
      <Card.Img variant="top" src={WhiskeyAvatar} />
      <Card.Body>
        <br></br>
        <Card.Title>Hey There! Meet: <b>Whiskey</b></Card.Title>
        <br></br>
        <Card.Title><b>Breed:</b>  Certified Good Girl</Card.Title>
        <Card.Title><b>Age:</b>  2 Years Old</Card.Title>
        <Card.Text>
          Some quick info about this beautiful creature!
        </Card.Text>
        <div className="openedcard-button-box">
          <Button variant="success">Rescue Me</Button>
          <Button href="/cats" variant="primary">Back to Dogs</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default WhiskeyCatCardOpened;