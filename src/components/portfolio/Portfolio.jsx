import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: "https://picsum.photos/300/200",
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
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
