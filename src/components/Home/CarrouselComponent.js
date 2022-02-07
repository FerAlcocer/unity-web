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
          <h1 className='fs-3 '>ACADEMIA DE JIU JITSU</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-3.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='fs-3 '>CONOCE NUESTROS PROGRAMAS</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac-1.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='fs-3 '>CONOCE NUESTROS PROFESORES</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
