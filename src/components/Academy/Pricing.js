import React, { useEffect } from 'react';

export const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="row animate__animated animate__fadeIn mt-5">
    <div  className="col-md-3"></div>
    <div  className="col-md-2">

    <h4>Entrada</h4>
      <p>
        <strong>Ingreso al tatami</strong> 
        <br />$500 por clase
        <br />
        <br />$2500 por mes
      </p>
    </div>

    <div  className="col-md-2">

      <h4>Adultos</h4>
        <p>
          <strong>Contrato 6 meses</strong> 
          <br />$2000/mo - Clases ilimiatadas
        </p>

        <p>
          <strong>Mes a mes</strong> 
          <br />$2500/mo - Clases ilimiatadas
        </p>
    </div>
      
    <div  className="col-md-2">

    <h4>Kids</h4>
      <p>
       <strong>Contrato 6 meses</strong> 
        <br />$2000/mo - Clases ilimiatadas
      </p>

      <p>
      <strong>Mes a mes</strong> 
        <br />$2500/mo - Clases ilimiatadas
      </p>
      </div>

    <div  className="col-md-3"></div>
    </div >
    </>
  );
};
