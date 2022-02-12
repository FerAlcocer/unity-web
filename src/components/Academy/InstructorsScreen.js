import React, { useEffect } from 'react';
import { instructors } from '../../data/instructors';

export const InstructorsScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="container animate__animated animate__fadeIn">
      {
      instructors.map(instructor => (
        <div className="card mb-3 border-0" key={instructor.id}> 
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ "./assets/profiles/"+instructor.id+".jpg" } className="img-fluid rounded-start" style= {{"paddingRight":"50px"}} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title"><strong >{ instructor.Name } </strong>{ instructor.Rank }</h1>
              <p className="card-text fs-3"><b><small className="text-muted">{ instructor.m_Description }</small></b></p>
              
              <hr />

              <p className="card-text fs-5"><strong>Objetivos</strong></p>
              {
                instructor.objetivos.map((c) => (<p className="card-text">{ c }</p>))
              }


              <p className="card-text fs-5"><strong>Plan de estudio</strong></p>
              {
                instructor.plan.map((c) => (<p className="card-text">{ c }</p>))
              }


              <p className="card-text fs-5"><strong>Horario </strong>{instructor.horario}</p>
              
            </div>
          </div>
        </div>
        </div>
        ))
      }
    </div>
    </> 
    )};
