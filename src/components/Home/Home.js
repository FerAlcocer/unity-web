import React from "react";
import { CarrouselComponent } from "./CarrouselComponent";
import { Jumbotron } from "./Jumbotron";
import { HomeCards } from "./HomeCards";
import { InstagramCards } from "./InstagramCards";
import { FAQ } from "./FAQ";
import { Info } from "./Info";
import '../../styles/Container.css';
import '../../styles/Imagen.css';

//import UserService from "../../services/user.service";

const Home = () => {
  //const [content, setContent] = useState("");

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
      {/*<div className='card-columns box' ></div>*/}
      <Jumbotron />
      <HomeCards />
      <FAQ />
      <InstagramCards />

      <Info />
    </>
  );
};

export default Home;
