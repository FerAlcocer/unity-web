import React from 'react';

export const InstagramCards = () => {
  return (
    <>
    <div className='card-columns cont fs-4' >Join us on Instagram <i className="fa fa-instagram" />{' |  '}<strong>@unity_jiujitsu_</strong></div>
    <div className="conteiner" style={{marginLeft:"20px",marginRight:"20px"}}>

      <div className="col-12">
      <span className="filt"><img className="imagen" alt="" src="./assets/instagram/1.jpg"/></span>
      <span className="filt"><img className="imagen" alt="" src="./assets/instagram/2.jpg"/></span>
      <span className="filt"><img className="imagen" alt="" src="./assets/instagram/3.jpg"/></span>
      <span className="filt"><img className="imagen" alt="" src="./assets/instagram/4.jpg"/></span>
      </div>
    </div>
    </>
  );
};
