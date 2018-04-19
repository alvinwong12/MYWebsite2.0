import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center "> 
                    <div>
                        <h1 className="section-header">ABOUT ME</h1>
                        <div className = "spacing-sm"></div>
                        <div className="bar centre"></div>
                    </div>
                </div>
                <div className = "spacing-lg"></div>
                <div className="row">
                    <div className="col">
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src="..." alt="..."/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Media heading</h4>
                            </div>
                            </div>
                        </div>
                    <div className="col">
                        <p className="content">{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

About.defaultProps = {
    text: "Paragraph"
}

export default About