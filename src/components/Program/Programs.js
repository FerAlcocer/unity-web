import { Card, Col , Row, Button,Container} from 'react-bootstrap';
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
        <Card.Title><strong><div className="fs-1">{program.Name}</div></strong></Card.Title>
        <Card.Img variant="top" 
          style={{border: "1px solid black",borderRadius: "2em"}}
          src={ "./assets/programs/"+program.id+".jpg" }
           />
        <Card.Body>
         
          {/*<Card.Text>
            
          </Card.Text>*/}
          
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
