import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center">
                    <p className="display-1 jumbotron-header">Alvin Wong</p>
                    <p className="lead">Software Engineer</p>
                    <p><a className="btn btn-primary btn-sm btn-square" href="#about" role="button">Learn more</a></p>
                </div>          
            </div>
        );
    }
}

export default Jumbotron