import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const HomeCards = () => {
  return (
    <CardGroup>
        <Card   style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Kids Class</Card.Title>
          
          <Link to={ `./program/0` }>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" >LEARN MORE</Button>
          </div>
          </Link>
        </Card.Body>
        </Card>

        <Card   style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Intro Class</Card.Title>
          
          <Link to={ `./program/0` }>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" >LEARN MORE</Button>
          </div>
          </Link>
        </Card.Body>
        </Card>

        <Card   style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Schedule</Card.Title>
          
          <Link to={ `./program/0` }>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" >LEARN MORE</Button>
          </div>
          </Link>
        </Card.Body>
        </Card>

        <Card   style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Instructors</Card.Title>
          
          <Link to={ `./instructors` }>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" >LEARN MORE</Button>
          </div>
          </Link>
        </Card.Body>
        </Card>

    </CardGroup>    
  );
};
