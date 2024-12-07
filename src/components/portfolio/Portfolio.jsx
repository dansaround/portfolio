import React from "react";
import "./portfolio.css";
import HFIMGEN from "../../assets/portfolio/hg-image-generator.gif";
import SIRVALO from "../../assets/portfolio/sirvalogames.gif";
import PRESENTS from "../../assets/portfolio/presents.gif";
import DANCEAROUND from "../../assets/portfolio/dancearound.gif";
import T3GALLERY from "../../assets/portfolio/T3Gallery.gif";

const portfolioItems = [
  {
    id: 1,
    image: DANCEAROUND,
    title: "Dance Around: Personal Project",
    github: "https://github.com/dansaround/dancearound",
    demo: "https://dancearound.vercel.app/",
    description:
      "Personal video library using Youtube's API. React + Javascript",
  },
  {
    id: 0,
    image: T3GALLERY,
    title: "T3 Gallery",
    github: "https://github.com/dansaround/gallery-t3",
    demo: "https://gallery-t3-five.vercel.app",
    description:
      "T3 Stack with Drizzle, Clerk, UploadThing, Posthog. Next.js + Typescript",
  },

  {
    id: 2,
    image: HFIMGEN,
    title: "AI Image Generator",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://hf-image-generator.vercel.app/",
    description:
      "Image Generator using Huggingface.js Inference API. React + Typescript",
  },
  {
    id: 4,
    image: PRESENTS,
    title: "Presents: Link Hub",
    github: "https://github.com/dansaround/presents",
    demo: "https://presents-lac.vercel.app/",
    description:
      "Digital Hub for Real State Agents, think linktree but 10x better. React + Typescript",
  },
  {
    id: 3,
    image: SIRVALO,
    title: "Sirvalo Games | Android App",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://www.instagram.com/sirvalo.games/",
    description:
      "Fullstack app with Node, React Native and Firebase | Repos are Private: links will redirect to customer's site. Typescript",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>

      <div className="container portfolio__container">
        {portfolioItems.reverse().map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="portfolio item" />
            </div>
            <h3>{item.title}</h3>
            <span>{item.description}</span>
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
