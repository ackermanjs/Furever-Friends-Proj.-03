import React from "react";
import MiloAvatar from "../images/MiloAvatarVariation1Bigger.png";
import OliverAvatar from "../images/OliverAvatarVariation1Bigger.png";
import WhiskeyAvatar from "../images/WhiskeyAvatarVariation1Bigger.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CatCards = () => {
  return (
<Container>
      <Row>
        <Col>
          <Card className="shadow-lg" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={WhiskeyAvatar} />
            <Card.Body>
              <Card.Title>Whiskey</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary">Rescue Me</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Status: Ready for Adoption</small>
        </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={MiloAvatar} />
            <Card.Body>
              <Card.Title>Milo</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary">Rescue Me</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Status: Ready for Adoption</small>
        </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={OliverAvatar} />
            <Card.Body>
              <Card.Title>Oliver</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary">Rescue Me</Button>
            </Card.Body><Card.Footer>
          <small className="text-muted">Status: Ready for Adoption</small>
        </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>  )
}

export default CatCards