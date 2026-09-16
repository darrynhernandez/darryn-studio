import { ArrowUpRight, BookOpen, Briefcase, LinkedinLogo, MapTrifold, Martini } from "@phosphor-icons/react";

const projects = [
  {
    number: "01",
    title: "A Fine Stir Bar Book",
    category: "Private cocktail library",
    description: "A personal bar, recipe library, and thoughtful bartender’s assistant.",
    href: "https://barbook.afinestir.com",
    Icon: BookOpen,
  },
  {
    number: "02",
    title: "A Fine Stir",
    category: "Cocktail culture",
    description: "Cocktails, stories, and the details that make a good drink memorable.",
    href: "https://afinestir.com",
    Icon: Martini,
  },
  {
    number: "03",
    title: "Operator",
    category: "Personal operations",
    description: "A practical personal operator for organizing the work and life ahead.",
    href: "https://operator.darrynhernandez.com",
    Icon: Briefcase,
  },
  {
    number: "04",
    title: "European Family Christmas Market Finder",
    category: "Family days out",
    description: "A simple guide to family-friendly Christmas markets a short trip from the Netherlands.",
    href: "https://utrecht-family-market-finder-2026.darrynhernandez.chatgpt.site",
    Icon: MapTrifold,
  },
];

function ProjectRow({ project }) {
  const { Icon } = project;

  return (
    <a
      className="project-row"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
    >
      <span className="project-row__number">{project.number}</span>
      <span className="project-row__icon" aria-hidden="true"><Icon weight="thin" /></span>
      <span className="project-row__content">
        <span className="project-row__category">{project.category}</span>
        <span className="project-row__title">{project.title}</span>
        <span className="project-row__description">{project.description}</span>
      </span>
      <span className="project-row__action" aria-hidden="true"><ArrowUpRight weight="light" /></span>
    </a>
  );
}

export default function Dashboard() {
  return (
    <main className="project-dashboard" id="top">
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <a className="dashboard-wordmark" href="https://darrynhernandez.com" aria-label="Return to Darryn Hernandez homepage">Darryn Hernandez</a>
          <div className="dashboard-header__right">
            <span>Personal index</span>
            <a href="https://darrynhernandez.com" className="dashboard-home-link">Homepage</a>
          </div>
        </header>

        <section className="dashboard-intro" aria-labelledby="dashboard-title">
          <div className="dashboard-intro__grid">
            <h1 id="dashboard-title">Things I’ve <em>been making.</em></h1>
            <p>Apps, sites, and ideas shaped by family life, good food, and the things I wish already existed.</p>
          </div>
        </section>

        <nav className="project-list" aria-label="Projects">
          {projects.map((project) => <ProjectRow key={project.title} project={project} />)}
        </nav>

        <footer className="dashboard-footer">
          <div>
            <p className="dashboard-kicker">Elsewhere</p>
            <a className="dashboard-linkedin" href="https://www.linkedin.com/in/darryn-hernandez" target="_blank" rel="noreferrer">
              <LinkedinLogo weight="fill" aria-hidden="true" />
              Connect on LinkedIn
              <ArrowUpRight weight="light" aria-hidden="true" />
            </a>
          </div>
          <p className="dashboard-footer__note">A personal project index by Darryn Hernandez.</p>
        </footer>
      </div>
    </main>
  );
}
