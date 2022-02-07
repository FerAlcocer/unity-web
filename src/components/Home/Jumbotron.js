import React from 'react';
import  '../../styles/Jumbotron.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const Jumbotron = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container mt-4">
        <h1 class="display-3">WELCOME TO UNITY</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p class="lead">
          <Link to={ `./filosophy` }>
          <div>
            <Button variant="primary" >LEARN MORE</Button>
          </div>
          </Link> 
      </p>
      </div>
    </div>
  );
};
