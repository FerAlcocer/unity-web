import React from 'react';
import {Accordion} from 'react-bootstrap';

export const FAQ = () => {
  return (
    <>
    <div className='card-columns box-v2 font-resize animate__animated animate__fadeIn'><i className="fa fa-question-circle" /> FAQ </div>

    <div className='container' >
      <Accordion className="card-columns animate__animated animate__fadeIn mb-4 mt-4">

        <Accordion.Item eventKey="0">
          <Accordion.Header><strong className='fs-4 ' >¿Puedo probar una clase?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><strong className='fs-4 ' >¿Cuales son los horarios?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><strong className='fs-4 ' >¿Que indumentaria necesito para entrenar?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><strong className='fs-4 ' >¿Cuanto duran las clases?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><strong className='fs-4 ' >¿Cuanto sale el mes?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><strong className='fs-4 ' >¿La academia posee duchas?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><strong className='fs-4 ' >No tengo kimono (gi), ¿puedo entrenar igual?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><strong className='fs-4 ' >¿Ofrecen clases particulares?</strong></Accordion.Header>    
            <Accordion.Body>...
          </Accordion.Body>
        </Accordion.Item>

       
      </Accordion>

    </div>
   
    </>
  );
};
