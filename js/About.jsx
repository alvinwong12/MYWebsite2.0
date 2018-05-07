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
                <div className = "spacing-lg"></div>
                <div className = "spacing-lg"></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <img src={this.props.image} className="img-fluid rounded-circle mx-auto d-block img-circle" alt="Responsive image"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <p className="content text-justify">{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

About.defaultProps = {
    text: "Paragraph",
    image: "..."
}

export default About