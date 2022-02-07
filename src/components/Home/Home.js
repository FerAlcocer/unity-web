import React from "react";
import { CarrouselComponent } from "./CarrouselComponent";
import { Jumbotron } from "./Jumbotron";
import { HomeCards } from "./HomeCards";
import { InstagramCards } from "./InstagramCards";
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
      <div className='card-columns cont fs-5' ><strong>SWIPE UP TO SEE MORE CONTENT!</strong></div>
      <Jumbotron />
      <hr />
      

      <HomeCards />
      <InstagramCards />

     
      

      <div className='card-columns cont fs-4'><strong>Ready to Get Started?</strong> Begin Your Journey.</div>
      
      <div className="fs-4 text-center mt-4" >
        <p><strong>BLACK UNITY</strong>, Carlos Pellegrini 91 (Dpto. 2, 1er. Piso), PARANA, E.R., 3100, ARGENTINA</p>
      </div>

      <div className="container text-center mt-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1008.859851340617!2d-60.53173747620967!3d-31.73264888636914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9d3b223bf73461f!2sUnity%20Jiu%20Jitsu!5e0!3m2!1ses!2sar!4v1644242393254!5m2!1ses!2sar"
                width="500"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
            />
      </div>
    </>
  );
};

export default Home;
