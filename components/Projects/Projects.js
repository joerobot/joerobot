import projects from './projects-list';
import Project from '../Project/Project';
export default () => (
    <section className="projects">
        <h2 className="section-header">Projects</h2>
        <ul className="project-list">
            {projects.map((project, i) => <Project name={ project.name } key={i}/>)}
        </ul>
    </section>
);
