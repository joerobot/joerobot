import React from 'react';
import projectsData from './projects-data';
import Project from './Project';

class Projects extends React.Component {
    constructor() {
        super();
    }
    render() {
        const allProjects = projectsData.projects.map((project, index) => {
            return (
                <li key={index}>
                    <Project data={project} />
                </li>
            );
        });

        return (
            <div>
                <h2 className="section-head">Projects</h2>
                <ul className="projects-list">
                    {allProjects}
                </ul>
            </div>
        );
    }
}

export default Projects;
