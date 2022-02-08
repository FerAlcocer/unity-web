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
        <></>
      ) : 
      location.pathname === "/login" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>LOG IN!</div>):
      location.pathname === "/register" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>SIGN UP!</div>):
      location.pathname === "/programs" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PROGRAMS</div>):
      location.pathname === "/instructors" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>INSTRUCTORS</div>):
      location.pathname === "/schedule" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>SCHEDULE</div>):
      location.pathname === "/pricing" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PRICING</div>):
      location.pathname === "/contact" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>CONTACT</div>):
      location.pathname === "/career" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>CAREER</div>):
      location.pathname === "/get-started" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>GET STARTED!</div>):
      location.pathname.includes("/program/") ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PROGRAMS</div>):
      (
        <></>
      )
    }
    </>
  );
};




