import React from "react";
import "./portfolio.css";
import PRESENTATION from "../../assets/portfoliohtml.gif";
import GAMEOFLIFE from "../../assets/gameoflife.gif";
import TODOAPP from "../../assets/todoapp.gif";

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
    image: TODOAPP,
    title: "To Do App",
    github: "https://github.com/dansaround/react-to-do",
    demo: "https://react-to-do-flax.vercel.app/",
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
