import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
      <>
    <section id="about-us" className="about-us">
    <div className="container" data-aos="fade-up">

      <div className="row content">
        <div className="col-lg-6" data-aos="fade-right">
          <h2>Our Target</h2>
          <h3>Match Our Designs With Your Desires</h3>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
          <p>
           yuthies Aari is one of the leading Aari designing Website in Sri Lanka since 2020. We provide 100% quality designs and Embroderies For you in your budget
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Unique designs</li>
            <li><i className="ri-check-double-line"></i> Perfect Embroidery works</li>
            <li><i className="ri-check-double-line"></i> Door step meterial collecting and delivery</li>
          </ul>
          <p className="font-italic">
          A brand exists in the minds of consumers. 
          That’s it. Nowhere else. No matter how clever your brand messaging is, 
          it can’t alter the brand. It can only raise awareness or reinforce existing perceptions. 
          If consumers know a brand promise is empty, 
          they’ll just scoff at the disconnect between the message and the actual customer experience.
          </p>
        </div>
      </div>

    </div>
  </section>
  </>
  );
}

export default About;
