import React from "react";
import "./portfolio.css";
import PRESENTATION from "../../assets/portfoliohtml.gif";
import GAMEOFLIFE from "../../assets/gameoflife.gif";
import TODOAPP from "../../assets/todoapp.gif";
import QR from "../../assets/QRComponent.png";
import PREVIEW_COMPONENT from "../../assets/screenshot-mobile.png";
import INTERACTIVECARDS from "../../assets/interactive-card.png";
import THEXO from "../../assets/thexo.png";

const data = [
  {
    id: 1,
    image: PRESENTATION,
    title: "My Very First Personal Site",
    github: "https://github.com/dansaround/presentation",
    demo: "https://thexo.encolados.com/",
  },
  {
    id: 2,
    image: THEXO,
    title: "The XO Game",
    github: "https://github.com/dansaround/thexo",
    demo: "https://party-yard.vercel.app/",
  },
  {
    id: 3,
    image: TODOAPP,
    title: "To Do App",
    github: "https://github.com/dansaround/react-to-do",
    demo: "https://react-to-do-flax.vercel.app/",
  },
  {
    id: 4,
    image: QR,
    title: "QR Component",
    github: "https://github.com/dansaround/frontend-qr-component",
    demo: "https://frontend-qr-component.vercel.app/",
  },
  {
    id: 5,
    image: PREVIEW_COMPONENT,
    title: "Responsive Preview Component",
    github: "https://github.com/dansaround/frontend-product-preview",
    demo: "https://frontend-product-preview-component.vercel.app/",
  },
  {
    id: 6,
    image: INTERACTIVECARDS,
    title: "Interactive Card Payment Component",
    github: "https://github.com/dansaround/frontend-product-preview",
    demo: "https://frontend-interactive-card.vercel.app/",
  },
  {
    id: 7,
    image: GAMEOFLIFE,
    title: "The Game of Life",
    github: "https://github.com/dansaround/PartyYard",
    demo: "https://party-yard.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="portfolio item" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
