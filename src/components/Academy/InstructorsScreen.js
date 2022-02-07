import React from 'react';
import { instructors } from '../../data/instructors';

export const InstructorsScreen = () => {
  return (
    <>
    <div className="container animate__animated animate__fadeIn">
      {
      instructors.map(instructor => (
        <div className="card mb-3" key={instructor.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ instructor.Name }</h5>
              <p className="card-text"><b><small className="text-muted">{ instructor.m_Description }</small></b></p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        </div>
        ))
      }
    </div>
    </> 
    )};
