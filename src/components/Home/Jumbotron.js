import React from 'react';
import  '../../styles/Jumbotron.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const Jumbotron = () => {
  return (
    <>
    <div className='box-v2 font-resize animate__animated animate__fadeIn'><strong>WELCOME TO UNITY</strong></div>
    <div className="jumbotron jumbotron-fluid animate__animated animate__fadeIn">
      <div className="container mt-4">
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="lead">
          <Link to={ `./filosophy` }>
              <Button variant="primary" >LEARN MORE</Button>
          </Link> 
          </p>
      </div>
    </div>
    </>
  );
};
