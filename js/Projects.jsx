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
                <div className = "spacing-lg"></div>
                <div className = "spacing-lg"></div>
   
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <div id="project1"></div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <div id="project2"></div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <div id="project3"></div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Projects