import React from 'react';
import '../../styles/Container.css';

export const ContainerComponent = (prop) => {
  return (
    <>
    <div className='card-columns animate__animated animate__fadeIn cont fs-3 '>{prop.text}</div>
    </>
  );
};
