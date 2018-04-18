import React from 'react';

class Projects extends React.Component {
    render (){
        return (
            <div className="container">
                <div className="text-center ">
                    <h1 className="section-header">PROJECTS</h1>
                    <div className = "spacing-sm"></div>
                    <div className="bar centre"></div>
                </div>
                <div className = "spacing-lg"></div>                     
                <div className="card-deck">
                    <div id="project1"></div>
                    <div id="project2"></div>
                    <div id="project3"></div>
                </div>   
                {/* <div className="row">
                    <div className="col">
                        <div id="project1"></div>
                    </div>
                    <div className="col">
                        <div id="project2"></div>
                    </div>
                    <div className="col">
                        <div id="project3"></div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Projects