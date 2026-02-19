import "./portfolio.css";

const portfolioItems = [
  {
    id: 0,
    image: "/assets/portfolio/dancearound.gif",
    title: "Dance Around: Personal Project",
    github: "https://github.com/dansaround/dancearound",
    demo: "https://dancearound.vercel.app/",
    description:
      "Personal video library using Youtube's API. React + Javascript",
  },
  {
    id: 1,
    image: "/assets/portfolio/presents.gif",
    title: "Presents: Link Hub",
    github: "https://github.com/dansaround/presents",
    demo: "https://presents-lac.vercel.app/",
    description:
      "Digital Hub for Real State Agents, think linktree but 10x better. React + Typescript",
  },
  {
    id: 2,
    image: "/assets/portfolio/hg-image-generator.gif",
    title: "AI Image Generator",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://hf-image-generator.vercel.app/",
    description:
      "Image Generator using Huggingface.js Inference API. React + Typescript",
  },
  {
    id: 3,
    image: "/assets/portfolio/T3Gallery.gif",
    title: "T3 Gallery",
    github: "https://github.com/dansaround/gallery-t3",
    demo: "https://gallery-t3-five.vercel.app",
    description:
      "T3 Stack with Drizzle, Clerk, UploadThing, Posthog. Next.js + Typescript",
  },
  {
    id: 4,
    image: "/assets/portfolio/sirvalogames.gif",
    title: "Sirvalo Games | Android App",
    github: "https://github.com/dansaround/hf-image-generator",
    demo: "https://www.instagram.com/sirvalo.games/",
    description:
      "Fullstack app with Node, React Native and Firebase | Repos are Private: links will redirect to customer's site. Typescript",
  },
  {
    id: 5,
    image: "/assets/portfolio/Anime2Watch.gif",
    title: "Responsive Web | Next.js",
    github: "https://github.com/dansaround/anime2watch",
    demo: "https://anime2watch.vercel.app/",
    description:
      "Used SSR and SSG with Anilists GraphQL API. Next.js + Typescript",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {[...portfolioItems].reverse().map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <span>{item.description}</span>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
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
