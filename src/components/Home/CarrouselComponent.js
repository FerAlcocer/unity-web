import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Text.css';

export const CarrouselComponent = () => {
  return (
    <Carousel fade className="card-columns animate__animated animate__fadeIn">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-2.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='fs-2 text-highlight'>ACADEMIA DE JIU JITSU</h1>
          <h1 className='fs-5 text-highlight'>Comenzá hoy!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-3.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='fs-2 text-highlight'>CONOCE NUESTROS PROFESORES</h1>
          <h1 className='fs-5 text-highlight'>Busca un instructores según tus objetivos.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-1.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='fs-2 text-highlight'>CONOCE NUESTROS PROGRAMAS</h1>
          <h1 className='fs-5 text-highlight'>Clases para todos los niveles y edades.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
