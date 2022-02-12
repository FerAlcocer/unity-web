import React from 'react';

export const PhotoCard = ({
  id
}) => {
  {
    console.log(id)
  }
  return (
      <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 400 } }>
          <div className="row no-gutters">
              <div className="col-md-4">
                  <img src={ `./assets/photoandvideo/${ id }.jpg` } className="card-img" alt="img" />
              </div>
          </div>
      </div>
  )
}
