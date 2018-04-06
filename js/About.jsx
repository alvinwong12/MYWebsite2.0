import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="text-center "> 
                    <div>
                        <h1>About Me</h1>
                        <div className="bar centre"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xs-5 col-md-5 col-sm-5">
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src="..." alt="..."/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Media heading</h4>
                            </div>
                            </div>
                        </div>
                    <div className="col-lg-7 col-xs-7 col-md-7 col-sm-7">
                        <p>
                            About Me Placeholder paragraph
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About