import React from "react";
import "./portfolio.css";
import PRESENTATION from "../../assets/portfoliohtml.gif";
import GAMEOFLIFE from "../../assets/gameoflife.gif";
import INTERACTIVECARDS from "../../assets/interactive-card.png";
import THEXO from "../../assets/thexo.png";
import DANCEAROUND from "../../assets/DANCEAROUND.png";

const data = [
  {
    id: 1,
    image: PRESENTATION,
    title: "My Very First Personal Site",
    github: "https://github.com/dansaround/presentation",
    demo: "https://papaya-malasada-a008d0.netlify.app/",
  },
  {
    id: 2,
    image: GAMEOFLIFE,
    title: "The Game of Life",
    github: "https://github.com/dansaround/PartyYard",
    demo: "https://party-yard.vercel.app/",
  },
  {
    id: 3,
    image: INTERACTIVECARDS,
    title: "Interactive Card Payment Component",
    github: "https://github.com/dansaround/frontend-product-preview",
    demo: "https://frontend-interactive-card-dansaround.vercel.app/",
  },
  {
    id: 4,
    image: THEXO,
    title: "The XO Game | Multiplayer Only, share with a friend",
    github: "https://github.com/dansaround/thexo",
    demo: "https://thexo.encolados.com/",
  },
  {
    id: 5,
    image: DANCEAROUND,
    title: "Dance Around: Personal Project",
    github: "https://github.com/dansaround/dancearound",
    demo: "https://dancearound.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>

      <div className="container portfolio__container">
        {data.reverse().map((item) => (
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
