import React, { useState, useEffect } from "react";

import AuthService from "../../services/auth.service";
// import AuthVerify from "./common/AuthVerify";
import EventBus from "../../common/EventBus";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../styles/Navbar.css';

export const NavbarComponent = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/home">
           <img src={ `../assets/logo-unity.png`} alt="Unity" style={{width:"120px"}}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight:"20px"}}/>
          <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>

              

              <Nav.Link as={Link} to="/programs">Programas</Nav.Link>
              <Nav.Link as={Link} to='/instructors'>Instructores</Nav.Link>

              
              
              <NavDropdown title="Academy" id="basic-nav-dropdown">
                {/*<NavDropdown.Item as={Link} to='/filosophy'>Filosophy</NavDropdown.Item>*/}
                <NavDropdown.Item as={Link} to="/schedule">Horarios</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pricing">Precios</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/photos-video'>Photos & Videos</NavDropdown.Item>  
                
              </NavDropdown>

              <Nav.Link as={Link} to='/contact'>Contacto</Nav.Link>

              {
                currentUser ? (
                  <>
                    <Nav.Link as={Link} to="/career" className="nav-link">
                    Carrera
                    </Nav.Link>
                  </>
                ) : (
                  <></>
                )
              }
              </Nav>

              {showModeratorBoard && (
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
              )}

              {showAdminBoard && (
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
              )}

              {currentUser && (
              <Link to={"/user"} className="nav-link">
                User
              </Link>
              )}    

            {currentUser ? (
              <Nav className="justify-content-end" style={{paddingRight:"50px"}}>
              <Nav.Link as={Link} to="/profile" className="nav-link">
                {currentUser.username}
               </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link" onClick={logOut}>
                  Salir
                  </Nav.Link>
              </Nav>
            ) : (
              <Nav className="justify-content-end" style={{paddingRight:"50px"}}>
                <Nav.Link as={Link} to="/login" className="nav-link">
                  Ingreso
                </Nav.Link>

                <Nav.Link  as={Link} to="/register" className="nav-link">
                  Registro
                </Nav.Link>
                </Nav>
            )
            }
          </Navbar.Collapse>
      </Navbar>
  );
};
