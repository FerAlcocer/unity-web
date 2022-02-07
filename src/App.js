import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Footer } from "./components/shared/Footer";
import { NavbarComponent } from "./components/shared/Navbar";

import { AppRouter } from "./routers/AppRouter";

const App = () => {
  return (
    <>
      <NavbarComponent />
        <AppRouter />
        
      {/* <AuthVerify logOut={logOut}/> */}

      <Footer />
    </>
  );
};

export default App;
