import React, { useState } from "react";
import { CarrouselComponent } from "./CarrouselComponent";

//import UserService from "../../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  /*useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);*/

  return (
    <>
      <CarrouselComponent />
      <header className="jumbotron">
          <h3>{content}</h3>
      </header>
    </>

  );
};

export default Home;
