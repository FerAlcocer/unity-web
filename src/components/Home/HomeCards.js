import React from 'react';
import {  Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const HomeCards = () => {
  return (
    <>

  <div className="row">
    <div className="col mb-4 text-center">
    <Link to={ `./program/1` }>
    <Button className="card-title button-box" variant="dark">KIDS CLASS</Button>
    </Link>
    </div>
    

    <div className="col  mb-4 text-center">
    <Link to={ `./program/0` }>
    <Button className="card-title button-box" variant="dark">INTRODUCTION CLASS</Button>
    </Link>
    </div>

    <div className="col  mb-4 text-center">
    <Link to={ `./schedule` }>
    <Button className="card-title button-box" variant="dark">SCHEDULE</Button>
    </Link>
    </div>

    <div className="col  mb-4 text-center">
    <Link to={ `./instructors` }>
    <Button className="card-title button-box" variant="dark">INSTRUCTORS</Button>
    </Link>
    </div>
  </div>

    {/*<div className="conteiner animate__animated animate__fadeIn" style={{marginLeft:"20px",marginRight:"20px"}}>

      <div className="col-12 ">
      
        <span className="filt head-text">
          <img className="imagen " alt="" src="./assets/home/1.jpg"/>
          <div className='text-on-image'>
             <h1 className='font-resize-cards text-on-image-style'> KIDS CLASS </h1>
          </div>
        </span>

        <span className="filt head-text"><img className="imagen" alt="" src="./assets/home/2.jpg"/>
          <div className='text-on-image'>
             <h1 className='font-resize-cards text-on-image-style'> INTRO CLASS </h1>
          </div>
        </span>
        
        <span className="filt head-text"><img className="imagen" alt="" src="./assets/home/3.jpg"/>
        <div className='text-on-image'>
             <h1 className='font-resize-cards text-on-image-style'> SCHEDULE</h1>
          </div>
        </span>
        
        <span className="filt head-text"><img className="imagen" alt="" src="./assets/home/4.jpg"/>
          <div className='text-on-image'>
             <h1 className='font-resize-cards text-on-image-style'> INSTRUCTORS </h1>
          </div>
        </span>
      </div>
  </div>*/}
    </>
  );
};
