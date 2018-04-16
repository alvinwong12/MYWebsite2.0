import React from 'react';

class Project extends React.Component{
    render(){
        return (
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                </div>
                <div className="card-footer text-right">
                    <a href={this.props.link} className="btn btn-primary"><i className="material-icons">link</i></a>
                </div>
            </div>
        );
    };
};

Project.defaultProps = {
    title: "Project Title",
    desc: "Sample Description",
    link: "#",
    link_text: "project link"
};

export default Project;