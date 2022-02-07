import React from 'react';
import '../../styles/Container.css';
import { useLocation } from 'react-router-dom';

export const ContainerComponent = () => {

  const location = useLocation();
  
  return (
    <>
    {
      location.pathname === "/" || location.pathname === "/home" ? 
      (
        <div className='card-columns animate__animated animate__fadeIn cont'></div>
      ) : 
      location.pathname === "/login" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Login in!</div>):
      location.pathname === "/register" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Sign Up!</div>):
      location.pathname === "/programs" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Programs</div>):
      location.pathname === "/instructors" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Instructors</div>):
      location.pathname === "/schedule" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Schedule</div>):
      location.pathname === "/pricing" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Pricing</div>):
      location.pathname === "/contact" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Contact</div>):
      location.pathname === "/contact" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Contact</div>):
      location.pathname === "/career" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Career</div>):
      location.pathname === "/get-started" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Get Started!</div>):
      location.pathname.includes("/program/") ? (<div className='card-columns animate__animated animate__fadeIn cont fs-3 '>Programs</div>):
      (
        <></>
      )
    }
    </>
  );
};




