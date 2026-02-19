import "./services.css";
import { BsCheckCircleFill } from "react-icons/bs";

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
              <BsCheckCircleFill className="service__list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Branding Brief</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Post&apos;s templates</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Unleash your brand&apos;s unique identity with our team of
                exceptional designers spanning Latin America.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                This responsive website is an example of using HTML/CSS/JS with
                React.js Project.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Fully responsive websites</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Backend approachable</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>E-Commerce is possible</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Search Engine Optimization</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Product Photography</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Event Photography</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Video Editing</p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>Social Media Content Creation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
