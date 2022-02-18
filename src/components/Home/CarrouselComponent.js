import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Text.css';

export const CarrouselComponent = () => {
  return (
    <Carousel className="animate__animated animate__fadeIn">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac2-2.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          {/*<h1 className='font-resize'>ACADEMIA DE JIU JITSU</h1>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac2-3.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h1 className='font-resize '>CONOCE NUESTROS PROGRAMAS</h1>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ `./assets/ac2-1.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h1 className='font-resize '>CONOCE NUESTROS PROFESORES</h1>*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
