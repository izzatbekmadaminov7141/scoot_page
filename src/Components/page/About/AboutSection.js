import React from "react";
import picture from "../../../Picture/code.webp";
function AboutSection() {
  return (
    <>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Dasturlashni</h2>
          </div>
          <div className="hide">
            <h2>Men bilan</h2>
          </div>
          <div className="hide">
            <h2>O'rganing</h2>
          </div>
        </div>
        <p>
          Dasturlashni siz kelaajakni o'zgartirish uchun o'rganing va bu sizning
          qo'lingizdan keladi.
        </p>
        <button>About US</button>
      </div>
      <div className="image">
        <img src={picture} alt="code javascript codes" />
      </div>
    </>
  );
}

export default AboutSection;
