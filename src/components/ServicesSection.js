import React from "react";
import home2 from "../img/home2.png";
// Importing icons from img

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
const Servicesection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Hight <span>quality</span> services
        </h2>
        <div className="cards">
          {/* card1 */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card1 */}

          {/* card2 */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card2 */}

          {/* card3 */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card3 */}

          {/* card4 */}
          <div className="card">
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card4 */}
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera " />
      </div>
    </div>
  );
};

export default Servicesection;
