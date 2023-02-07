import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Branding Brief</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Post's templates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Unleash your brand's unique identity with our team of
                exceptional designers spanning Latin America.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                This responsive website is an example of using HTML/CSS/JS with
                React.js Project.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fully responsive websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend approachable</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> E-Commerce is possible </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPEMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Product Photography</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Event Photography</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Social Media Content Creation </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
