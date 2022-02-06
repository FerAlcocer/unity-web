import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile";
import Programs from "./components/views/Programs";
import ProgramScreen from "./components/views/ProgramScreen";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { ScheduleScreen } from "./components/views/ScheduleScreen";
import { Library } from "./components/views/Library";
import { CareerScreen } from "./components/views/CareerScreen";
import { Footer } from "./components/shared/Footer";
import { NavbarComponent } from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <NavbarComponent />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/schedule" component={ScheduleScreen} />
          <Route exact path="/program/:programId" component={ ProgramScreen } />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/career" component={CareerScreen} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>

      {/* <AuthVerify logOut={logOut}/> */}

      <Footer />
    </>
  );
};

export default App;
