import React from 'react';
import {Accordion,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const FAQ = () => {
  return (
    <>
    <div className='card-columns box-v2 font-resize animate__animated animate__fadeIn'><i className="fa fa-question-circle" /> Preguntas frecuentes </div>

    <div className='container' >
      <Accordion className="card-columns animate__animated animate__fadeIn mb-4 mt-4">

        <Accordion.Item eventKey="0">
          <Accordion.Header><strong className='fs-4 ' >¿Puedo probar una clase?</strong></Accordion.Header>    
            <Accordion.Body>Por supuesto que si!, podes visitarnos y sin compromiso probar una clase totalmente gratuita.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><strong className='fs-4 ' >¿Necesito tener estado físico para empezar?</strong></Accordion.Header>    
            <Accordion.Body>Tener buena salud y estado físico es importante, pero el entrenamiento de Jiu Jitsu es particular y no es necesario estar entrenado.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><strong className='fs-4 ' >¿Cuales son los horarios?</strong></Accordion.Header>    
            <Accordion.Body>
              Tenemos horarios a la siesta, tarde y noche!
              <Link  to={ `./schedule/` }>
                  <Button variant="primary" style={{marginLeft:"20px"}} > Info...</Button>
              </Link>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><strong className='fs-4 '>¿Que indumentaria necesito para entrenar?</strong></Accordion.Header>    
            <Accordion.Body>Para las clases NO-GI tenemos una indumentaria exclusiva, lycra y short. Para el caso de GI, tenemos los kimonos de la Ralph Gracie!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><strong className='fs-4 ' >¿Cuanto duran las clases?</strong></Accordion.Header>    
            <Accordion.Body> Las clases tienen una duracion de 1 hora aproximadamente.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><strong className='fs-4 ' >¿Tienen clases exclusivas para mujeres?</strong></Accordion.Header>    
            <Accordion.Body>Si, tenemos instructoras especializadas y un grupo exclusivo ! 
            <Link  to={ `./program/2` }>
                  <Button variant="primary" style={{marginLeft:"20px"}} > Info...</Button>
            </Link>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><strong className='fs-4 ' >¿Cuanto sale el mes?</strong></Accordion.Header>    
            <Accordion.Body>Los costos se van actualizado segun la inflación. Para mas informacion esta la sección
            <Link  to={ `./pricing/` }>
                  <Button variant="primary" style={{marginLeft:"20px"}} > Info...</Button>
            </Link>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><strong className='fs-4 ' >¿La academia posee duchas?</strong></Accordion.Header>    
            <Accordion.Body>En la academia contamos con una ducha y 3 baños!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><strong className='fs-4 ' >No tengo kimono (gi), ¿puedo entrenar igual?</strong></Accordion.Header>    
            <Accordion.Body>Tenemos clases con y sin kimono!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><strong className='fs-4 ' >¿Ofrecen clases particulares?</strong></Accordion.Header>    
            <Accordion.Body>...
            <Link  to={ `./program/7` }>
                  <Button variant="primary" style={{marginLeft:"20px"}} > Info...</Button>
            </Link>
          </Accordion.Body>
        </Accordion.Item>

       
      </Accordion>

    </div>
   
    </>
  );
};
