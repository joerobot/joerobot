import React from 'react';

const Project = (props) => {
    const project = props.data;
    return (
        <div>
            <h5>{project.title}</h5>
        </div>
    );
}

export default Project;
