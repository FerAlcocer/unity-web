import React from 'react';
import  '../../styles/Text.css'

export const InstagramCards = () => {
  return (
    <>
    <div className='card-columns box-v2 font-resize animate__animated animate__fadeIn'><i className="fa fa-instagram" /> Seguinos en Instagram <strong ><a href="https://www.instagram.com/unity_jiujitsu_" style={{color:"white",textDecoration:"none"}}>@unity_jiujitsu_</a></strong></div>
    <div className="conteiner animate__animated animate__fadeIn" style={{marginLeft:"20px",marginRight:"20px"}}>

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
