import { Card, Col , Row, Button,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect} from "react";
import { programs } from '../../data/programs';

const Programs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Container >
      <Row>
      { programs.map(program => (
       <Col sm key={program.id} className="card-columns animate__animated animate__fadeIn">  
        <Card   style={{ width: '25rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{program.Name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          
          <Link to={ `./program/${ program.id }` }>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" > Más...</Button>
          </div>
          </Link>
        </Card.Body>
        </Card></Col>
      ))}
      
      </Row>
    </Container>
    </>
  );
};

export default Programs;
