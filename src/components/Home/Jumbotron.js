import React from 'react';
import  '../../styles/Jumbotron.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const Jumbotron = () => {
  return (
    <>
    <div className='box-v2 font-resize animate__animated animate__fadeIn' ><strong>BIENVENIDO A UNITY</strong></div>
    <div className="jumbotron jumbotron-fluid animate__animated animate__fadeIn " style={{"background":"black", "color":"white"}}>
      <div className="container">
        <p style={{color:"white"}}>En Unity enseñamos Jiu Jitsu de forma técnica, conceptual y eficaz. De forma que no solo aprendemos un arte marcial, sino que también disfrutamos del deporte. Tenemos diferentes instructores según la edad y los objetivos personales del estudiante.</p>
          <hr/>
          <p className="lead text-center mt-4" style={{paddingTop:"33px"}}>
          <Link to={ `./programs` }>
              <Button className="fs-2" variant="primary">NUESTROS PROGRAMAS</Button>
          </Link> 
          </p>
      </div>
    </div>
    </>
  );
};
