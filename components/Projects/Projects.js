import projects from "./projects-list";
import Project from "../Project/Project";
import "./Projects.scss";

export default () => (
  <section className="projects">
    <h2 className="section-header">Projects</h2>
    <ul className="project-list">
      {projects.map((project, i) => (
        <Project {...project} key={i} />
      ))}
    </ul>
  </section>
);
