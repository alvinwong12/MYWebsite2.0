import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center">
                    <p className="display-1 jumbotron-header">Alvin Wong</p>
                    <p className="content lead">Software Engineer</p>
                    <p><a className="btn btn-primary btn-sm btn-square btn-animated" href="#about" role="button">More About Me</a></p>
                </div>          
            </div>
        );
    }
}

export default Jumbotron