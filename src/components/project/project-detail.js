import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>React + Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by net ninja </div>
                    <div>2nd of September</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;