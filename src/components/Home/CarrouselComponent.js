import React from 'react';
import { Carousel } from 'react-bootstrap';

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
          <h3 className='fs-1'>BIENVENIDO A UNITY</h3>
          <p className='fs-4'>Empieza a entrenar Jiu Jitsu hoy!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-3.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='fs-1'>CONOCE NUESTROS PROFESORES</h3>
          <p className='fs-4'>Busca un instructores según tus objetivos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-1.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='fs-1'>CONOCE NUESTROS PROGRAMAS</h3>
          <p className='fs-4'>Clases para todos los niveles y edades.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
