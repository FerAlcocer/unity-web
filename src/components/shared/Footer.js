import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span>Acerca de Unity</span> En Unity enseñamos Jiu Jitsu de forma técnica, conceptual y eficaz. De forma que no solo aprendemos un arte marcial, 
          sino que también disfrutamos del deporte. Tenemos diferentes instructores según la edad y los objetivos personales del estudiante.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/unityjiujitsu"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/unity_jiujitsu_"><i className="fa fa-instagram"></i></a>
          <a href="https://wa.link/s6pcvu"><i className="fa fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Pellegrini 91</span> Paraná, ER, Argentina</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+54) 343 4732733</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <Link to={ `./home` } mailto="mailto:no-reply@example.com" >martin.paz@live.com.ar</Link>
        </div>
      </div>
      
      <div className="footer-right col-md-4 col-sm-6">
        <div className='row'>
          <div className='col-3'>
            <img src={ `../assets/logo-unity.png`} alt="Unity" style={{width:"120px"}}></img>
          </div>

          <div className='col-9'>
            <h2>Unity<span> JIUJITSU</span></h2>
            <p className="menu">
              <Link to={ `./home` }>Home</Link>{'  |  '}
              <Link to={ `./programs` }>Programs</Link>{'  |  '}
              <Link to={ `./schedule` }>Schedule</Link>{'  |  '}
              <Link to={ `./history` }>History</Link>{'  |  '}
              <Link to={ `./career` }>Career</Link>
            </p>
            <p className="name"> Copyright &copy; 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
