import React from 'react';

export const InstagramCards = () => {
  return (
    <>
    <div className='card-columns cont fs-4' ><i className="fa fa-instagram" /> Join us on Instagram <strong ><a href="https://www.instagram.com/unity_jiujitsu_" style={{color:"white"}}>@unity_jiujitsu_</a></strong></div>
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
