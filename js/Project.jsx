import React from 'react';

class Project extends React.Component{
    render(){
        return (
            <div className="card project">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-title h4">{this.props.title.toUpperCase()}</p>
                    <p className="card-text content project-content">{this.props.desc}</p>
                </div>
                <div className="card-footer text-right">
                    <a href={this.props.github} className="text-muted footer-link"><i className="fa fa-github"></i></a>
                    <a href={this.props.link} className="text-muted footer-link"><i className="fa fa-link"></i></a>
                </div>
            </div>
        );
    };
};

Project.defaultProps = {
    title: "project title",
    desc: "Sample Description",
    link: "#",
    github: "#",
    link_text: "project link"
};

export default Project;