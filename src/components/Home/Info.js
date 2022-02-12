import React from 'react';

export const Info = () => {
  return (
    <>
      <div className='box-v2 font-resize animate__animated animate__fadeIn'><strong>¿Estas listo para empezar?</strong> Comienza tu viaje!.</div>
        
        <div className="fs-4 text-center mt-4 animate__animated animate__fadeIn" >
          <p> <i className="fa fa-map-marker"></i>{' '}<strong>BLACK UNITY</strong>, Carlos Pellegrini 91 (Dpto. 2, 1er. Piso), PARANA, E.R., 3100, ARGENTINA</p>
        </div>

        <div className="container text-center mt-4 animate__animated animate__fadeIn">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1008.859851340617!2d-60.53173747620967!3d-31.73264888636914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9d3b223bf73461f!2sUnity%20Jiu%20Jitsu!5e0!3m2!1ses!2sar!4v1644242393254!5m2!1ses!2sar"
                  width="400"
                  height="400"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="map"
                  style={{border: "1px solid black"}}
              />
        </div>
      </>
  );
};
