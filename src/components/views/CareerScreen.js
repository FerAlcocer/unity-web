import React from 'react';
import {Accordion} from 'react-bootstrap';
import "../../styles/Video.css";
import "../../styles/Black.css";
import YoutubeEmbed  from "../shared/Video";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export const CareerScreen = () => {
  return (
    <>

      <div className="container mt-4">
        <p >En esta sección encontraras una serie de videos e información adicional de técnicas básicas y avanzadas de Jiu Jitsu. Nuestra intención es que tengas estos fundamentos para poder aprovechar el 100% de nuestras clases. Cualquier duda o detalle puedes preguntarle directamente a cualquier cinturón negro de nuestra academia.</p>
      </div>



  <div className='container mt-5 '>
  <Accordion className="card-columns animate__animated animate__fadeIn">
    <Accordion.Item eventKey="0">
      <Accordion.Header>#1 - Solo drills</Accordion.Header>
      
      <Accordion.Body>Technical stand up
        <YoutubeEmbed embedId="WVmPijtk9sw" />
      </Accordion.Body>
      <Accordion.Body>Kipping shrimp</Accordion.Body>
      <Accordion.Body>Upa / Bridging</Accordion.Body>
        <Accordion.Body>Rolling</Accordion.Body>
        <Accordion.Body>Falling</Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>#2 - Introducción de tecnicas de Jiu Jitsu</Accordion.Header>
        <Accordion.Body>Takedown</Accordion.Body>
        <Accordion.Body>Pass guard
          <YoutubeEmbed embedId="gB0x12lM36g" />
          <YoutubeEmbed embedId="PvbqMzB1_Yo" />
        </Accordion.Body>
        <Accordion.Body>Submission</Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="2">
    <Accordion.Header>Reglas básicas</Accordion.Header>
        <Accordion.Body>No puedes golpear.</Accordion.Body>
        <Accordion.Body>No puedes agarrar el pelo.</Accordion.Body>
        <Accordion.Body>No esta permitido meter un dedo en el ojo o la boca.</Accordion.Body>
        <Accordion.Body>No esta permitido agarrar un dedo individualmente o doblarlos.</Accordion.Body>
        <Accordion.Body>En cualquier movimiento que implique torsion de rodilla no esta permitido palanquear la posición.</Accordion.Body>
        <Accordion.Body>No esta permitido levantar y azotar a tu compañero</Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="3">
    <Accordion.Header>Glosario</Accordion.Header>
        <Accordion.Body>
          <div>
            <b>Americana</b> — A basic submission where the arm is bent and twisted towards the head in order to crank the shoulder. Also called American armbar, bent armlock, chicken wing, hammer lock, paint brush, top wrist lock, ude garami, and v-lock.
          </div>
          <div>
            <b>breakfall</b> — The techiques for safely falling to the ground, such as after a throw. To breakfall means to execute a safe fall to the mat. Also called rollovers and ukemi.
          </div>
          <div>
            <b>gi</b> — The uniform worn when training in Brazilian Jiu-Jitsu. Also called kimono.
          </div>
          <div>
            <b>guard</b> — A number of positions in grappling where the person on bottom is defending themselves and controlling the person on top using their legs. Closed guard is where the position is held with one’s legs wrapped around their opponent’s waist with their ankles crossed. Open guard
          </div>
          <div>
            <b>guard pass</b> — A technique done in order to get around or “pass” someone’s guard, ending with them securely holding a dominant position. Attempting to perform these techniques against an opponent is called passing the guard.
          </div>
          <div>
            <b>heelhook</b> — A submission where the heel is used to twist the leg and possibly tear the knee.
          </div>
          <div>
            <b>mount</b> — A dominant position in grappling where the person on top sits straddled across the torso of the person on bottom. In a self defense situation, the person with mount would be able to strike without much threat of being struck back. In grappling, mount offers the leverage and control to effect chokes and armlocks. The person on the bottom is considered mounted.
          </div>
          <div>
            <b>no-gi</b> — Refers to training without the gi, usually wearing shorts and a T-shirt
          </div>
          <div>
            <b>shrimp</b> — A drill done to train proper hip movement while on one’s back. It is an important part of many escapes and techniques. It is called “shrimping” because one bends in half like a shrimp as they scoot along the mat. Also called elbow escape or hip escape because of it is used in combination with the elbow in several escapes.
          </div>
          <div>
            <b>side control</b> — A number of dominant positions in grappling where the person on top pins the opponent, usually with chest to chest contact. Also called crossbody, cross-side and side mount. Many particular holds from side control have specific names, such as 100 kilos and scarf hold.
          </div>
          <div>
            <b>sweep</b> — A technique done from guard to put an opponent on their back and allow one to come up on top. To sweep means to successfully perform such a technique.
          </div>
          <div>
            <b>take the back</b> — To gain one of the most dominant positions in grappling (called rear mount) on an opponent’s back. From here, one can strike (in self defense situations) or choke with little fear of retaliation.
          </div>
          <div>
            <b>weave</b> — The type of fabric a Brazilian Jiu-Jitsu gi is made from. Single weave is one of the thinnest types, making it good for hot weather training. Double weave is twice the thickness of single, and gold weave is somewhere between the two. Summer weave is the lightest and most easily torn.
          </div>
          <div>
            <b>upa</b> — A bridging movement where you lie on your back and lift your hips off of the ground. Used in the basic bridge-and-roll mount escape.
          </div>
        </Accordion.Body>
        </Accordion.Item>
  </Accordion>
  </div>
  </>
  )
};
