import React from "react";
import picture from "../../../Picture/2.jpeg";

function BenefitsSection() {
  return (
    <div className="benefits container">
      <div className="image">
        <img src={picture} alt="" />
      </div>
      <div className="description">
        <h2>High quality learning system. </h2>
        <div className="benefit">
          <h3>Online Platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fas Learning System</h3>
          <h3>Online School for children</h3>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
