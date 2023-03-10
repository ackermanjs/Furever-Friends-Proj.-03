import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/DogCardOpened.css";
import LunaAvatar from "../images/LunaAvatarVariation1Bigger.png";

const LunaDogCardOpened = () => {
  return (
    <div className="dogcardopened-section">
      
      <Card className="shadow-lg" style={{ width: '30rem' }}>
      <Card.Img variant="top" src={LunaAvatar} />
      <Card.Body>
        <br></br>
        <Card.Title>Hey There! Meet: <b>Luna</b></Card.Title>
        <br></br>
        <Card.Title><b>Breed:</b>  Certified Good Girl</Card.Title>
        <Card.Title><b>Age:</b>  2 Years Old</Card.Title>
        <Card.Text>
          Some quick info about this beautiful creature!
        </Card.Text>
        <div className="openedcard-button-box">
          <Button href="/adoptform" variant="success">Rescue Me</Button>
          <Button href="/dogs" variant="primary">Back to Dogs</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default LunaDogCardOpened;