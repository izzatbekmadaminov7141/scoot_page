import React from "react";
import picture from "../../../Picture/1.jpeg";

function AboutSection() {
  return (
    <div className="AboutSection container">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              <span>D</span>asturlashni
            </h2>
          </div>
          <div className="hide">
            <h2>
              <span>M</span>en bilan
            </h2>
          </div>
          <div className="hide">
            <h2>
              <span>O'</span>rganing
            </h2>
          </div>
        </div>
        <p>
          Dasturlashni siz kelaajakni o'zgartirish uchun o'rganing va bu sizning
          qo'lingizdan keladi.
        </p>
        <button className="btn">About US</button>
      </div>
      <div className="image">
        <img src={picture} alt="code javascript codes" />
      </div>
    </div>
  );
}

export default AboutSection;
