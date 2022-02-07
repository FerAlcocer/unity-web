import React from 'react';
import  '../../styles/Jumbotron.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container mt-4">
        <h1 className="display-3">WELCOME TO UNITY</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="lead">
          <Link to={ `./filosophy` }>
              <Button variant="primary" >LEARN MORE</Button>
          </Link> 
          </p>
      </div>
    </div>
  );
};
