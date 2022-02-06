import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
          ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className="icons">
          <Link to={ `./home` }><i className="fa fa-facebook"></i></Link>
          <Link to={ `./home` }><i className="fa fa-twitter"></i></Link>
          <Link to={ `./home` }><i className="fa fa-linkedin"></i></Link>
          <Link to={ `./home` }><i className="fa fa-google-plus"></i></Link>
          <Link to={ `./home` }><i className="fa fa-instagram"></i></Link>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Pellegrini 91</span> Parana, Argentina</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+54) 343 4732733</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <Link to={ `./home` } mailto="mailto:no-reply@example.com" > martin.paz@live.com.ar</Link>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2> Company<span> UNITY</span></h2>
        <p className="menu">
          <Link to={ `./home` }>Home</Link>{'  |  '}
          <Link to={ `./programs` }>Programs</Link>{'  |  '}
          <Link to={ `./schedule` }>Schedule</Link>{'  |  '}
          <Link to={ `./history` }>History</Link>{'  |  '}
          <Link to={ `./career` }>Career</Link>

         
        </p>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
  );
};
