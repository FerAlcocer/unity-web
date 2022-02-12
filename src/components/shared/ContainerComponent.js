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
      location.pathname === "/login" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>INGRESA!</div>):
      location.pathname === "/register" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>REGISTRATE!</div>):
      location.pathname === "/programs" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PROGRAMAS</div>):
      location.pathname === "/instructors" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>INSTRUCTORES</div>):
      location.pathname === "/schedule" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>HORARIOS</div>):
      location.pathname === "/pricing" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PRECIOS</div>):
      location.pathname === "/contact" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>CONTACTO</div>):
      location.pathname === "/career" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>CARRERA</div>):
      location.pathname === "/get-started" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>EMPIEZA!</div>):
      location.pathname === "/photos-video" ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>FOTOS Y VIDEOS</div>):
      location.pathname.includes("/program/") ? (<div className='card-columns animate__animated animate__fadeIn cont fs-1'>PROGRAMA</div>):
      (
        <></>
      )
    }
    </>
  );
};




