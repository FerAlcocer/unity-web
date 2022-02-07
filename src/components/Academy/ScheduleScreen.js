import React from 'react';
import { ContainerComponent } from '../shared/ContainerComponent';

export const ScheduleScreen = () => {
  return (
      <>
      <ContainerComponent text={'Schedule'}/>
    <div className="container animate__animated animate__fadeIn" style={{marginTop:"20px"}}>
<div className="timetable-img text-center">
  <img src={ `./assets/heroes/dc-batman.jpg` } alt=""></img>
</div>
  
  <div className="table-responsive">
  <table className="table table-bordered text-center">
      <thead>
          <tr className="bg-light-gray">
              <th className="text-uppercase">Time
              </th>
              <th className="text-uppercase">Monday</th>
              <th className="text-uppercase">Tuesday</th>
              <th className="text-uppercase">Wednesday</th>
              <th className="text-uppercase">Thursday</th>
              <th className="text-uppercase">Friday</th>
              <th className="text-uppercase">Saturday</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td className="align-middle">15:00am</td>
              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">15:00-16:30</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
              </td>

              <td>
              </td>
          </tr>

          <tr>
              <td className="align-middle">16:30am</td>
              <td>
              </td>

              <td className="bg-light-gray">
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">16:30-17:45</div>
                  <div className="font-size13 text-light-gray">Francisco Cano</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">16:30-17:45</div>
                  <div className="font-size13 text-light-gray">Francisco Cano</div>
              </td>

              <td>
              </td>

              <td className="bg-light-gray">

              </td>
          </tr>

          <tr>
              <td className="align-middle">18:00am</td>
              <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">18:00-19:15</div>
                  <div className="font-size13 text-light-gray">Agostina Bonazza</div>
                  <div className="font-size13 text-light-gray">Katoga</div>
              </td>

              <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Kids 6-13</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Agostina Bonazza</div>
                  <div className="font-size13 text-light-gray">Katoga</div>
              </td>

              <td>
                   <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">18:00-19:15</div>
                  <div className="font-size13 text-light-gray">Agostina Bonazza</div>
                  <div className="font-size13 text-light-gray">Katoga</div>
              </td>

              <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Kids 6-13</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Agostina Bonazza</div>
                  <div className="font-size13 text-light-gray">Katoga</div>
              </td>

              <td>
                   <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">NO-GI beginner</span>
                  <div className="margin-10px-top font-size14">18:00-19:15</div>
                  <div className="font-size13 text-light-gray">Fernando Alcocer</div>
                  <div className="font-size13 text-light-gray">Katoga</div>
              </td>

              <td>
              </td>
              
          </tr>

          <tr>
              <td className="align-middle">19:30pm</td>
              <td className="bg-light-gray">
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals</span>
                  <div className="margin-10px-top font-size14">19:30-20:30</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>
              <td>

              </td>
              <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals</span>
                  <div className="margin-10px-top font-size14">19:30-20:30</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals</span>
                  <div className="margin-10px-top font-size14">19:30-20:00</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>

              <td>
              </td>

          </tr>

          <tr>
              <td className="align-middle">20:30pm</td>
              <td>
                  <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Advanced</span>
                  <div className="margin-10px-top font-size14">20:30-21:15</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Advanced</span>
                  <div className="margin-10px-top font-size14">20:30-21:15</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>

              <td>
              </td>

              <td>
                  <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Advanced</span>
                  <div className="margin-10px-top font-size14">20:30-21:15</div>
                  <div className="font-size13 text-light-gray">Martin Paz</div>
              </td>

              <td>
              </td>

          </tr>
      </tbody>
  </table>
  </div>
  </div>
  </>
  );
};
