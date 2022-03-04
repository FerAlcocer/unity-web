import React, { useEffect } from 'react';

export const ScheduleScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
      <>
    <div className="container animate__animated animate__fadeIn" style={{marginTop:"20px"}}>
<div className="timetable-img text-center">
  <img src={ `./assets/heroes/dc-batman.jpg` } alt=""></img>
</div>
  
  <div className="table-responsive">
  <table className="table table-bordered text-center">
      <thead>
          <tr style={{
                            background: "rgba(0, 0, 0, 1)",
                            color: "white"
                        }}>
              <th className="text-uppercase">Hora
              </th>
              <th className="text-uppercase">Lunes</th>
              <th className="text-uppercase">Martes</th>
              <th className="text-uppercase">Miércoles</th>
              <th className="text-uppercase">Jueves</th>
              <th className="text-uppercase">Viernes</th>
              {/*<th className="text-uppercase">Sábados</th>*/}
          </tr>
      </thead>
      <tbody>
          {/*<tr>
              <td className="align-middle">15:00am</td>
              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Iniciantes NO-GI</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Iniciantes NO-GI</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Iniciantes NO-GI</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>
            </tr>*/}

          <tr>
              
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle">11:00am</td>
              <td>
              </td>

              <td style={{
                            background: "rgba(0, 23, 23, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >11:00-12:00</div>
                  <hr/>
                  <div >Juan Martinez</div>
              </td>


              <td>
              </td>

              <td style={{
                            background: "rgba(0, 23, 23, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >11:00-12:00</div>
                  <hr/>
                  <div >Juan Martinez</div>
              </td>


              <td>
              </td>


          </tr>

          <tr>
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle">16:30pm</td>
              <td>
              </td>

              <td style={{
                            background: "rgba(0, 128, 0, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >16:30-17:45</div>
                  <hr/>
                  <div >Francisco Cano</div>
              </td>

              <td>
              </td>

              <td style={{
                            background: "rgba(0, 128, 0, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >16:30-17:45</div>
                  <hr/>
                  <div >Francisco Cano</div>
              </td>


              <td>
              </td>


          </tr>


          <tr>
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle">17:00pm</td>
              <td>
              </td>

              <td style={{
                            background: "rgba(128 ,64 , 0, 0.3)"
                        }}>
                  <span >Infantiles 3-5 años</span>
                  <div >17:00-18:00</div>
                  <hr/>
                  <div >Abelardo Diaz</div>
              </td>

              <td>
              </td>

              <td style={{
                            background: "rgba(128 ,64 , 0, 0.3)"
                        }}>
                  <span >Infantiles 3-5 años</span>
                  <div >17:00-18:00</div>
                  <hr/>
                  <div >Abelardo Diaz</div>
              </td>


              <td>
              </td>


          </tr>

          <tr>
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle" >18:00pm</td>
               
              <td style={{
                            background: "rgba(128, 0, 0, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >18:00-19:15</div>
                  <hr/>
                  <div >Agostina Bonazza <br/>Abelardo Diaz</div>
              </td>

              <td style={{
                            background: "rgba(128, 64, 0, 0.3)"
                        }}>
                  <span >Infantiles 6-13 años</span>
                  <div >18:00-19:00</div>
                  <hr/>
                  <div >Agostina Bonazza <br/>Abelardo Diaz</div>
              </td>

              <td style={{
                            background: "rgba(128, 0, 0, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >18:00-19:15</div>
                  <hr/>
                  <div >Agostina Bonazza <br/>Abelardo Diaz</div>
              </td>

              <td style={{
                            background: "rgba(128, 64, 0, 0.3)"
                        }}>
                  <span >Infantiles 6-13 años</span>
                  <div >18:00-19:00</div>
                  <hr/>
                  <div >Agostina Bonazza <br/>Abelardo Diaz</div>
              </td>

              <td style={{
                            background: "rgba(128, 0, 0, 0.3)"
                        }}>
                  <span >Iniciantes NO-GI</span>
                  <div >18:00-19:15</div>
                  <hr/>
                  <div >Agostina Bonazza <br/>Abelardo Diaz</div>
              </td>

      
              
          </tr>

          <tr>
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle" >19:30pm</td>
              
              <td style={{
                            background: "rgba(0, 0, 256, 0.3)"
                        }}>
                  <span >Fundamentos</span>
                  <div >19:30-20:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>

              <td>

              </td>

              <td style={{
                            background: "rgba(0, 0, 256, 0.3)"
                        }}>
                  <span >Fundamentos</span>
                  <div >19:30-20:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>

              <td>
              </td>


              <td style={{
                            background: "rgba(256, 0, 256, 0.3)"
                        }}>
                  <span >Open Mat</span>
                  <div >19:30-20:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>



          </tr>

          <tr>
              <td style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color:"white"
                        }} className="align-middle" >20:30pm</td>
              
              <td style={{
                            background: "rgba(260, 150, 50, 0.3)"
                        }}>
                  <span >Competicion</span>
                  <div >20:30-21:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>

              <td>
              </td>

              <td style={{
                            background: "rgba(260, 150, 50, 0.3)"
                        }}>
                  <span >Competicion</span>
                  <div >20:30-21:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>

              <td>
              </td>

              <td style={{
                            background: "rgba(256, 0, 256, 0.3)"
                        }}>
                  <span >Open Mat</span>
                  <div >20:30-21:30</div>
                  <hr/>
                  <div >Martin Paz</div>
              </td>


          </tr>
      </tbody>
  </table>
  </div>
  </div>
  </>
  );
};
