import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center">
                    <h1>Alvin Wong</h1>
                    <p>Software Developer</p>
                    <p><a className="btn btn-primary btn-lg btn-square" href="#about" role="button">Learn more</a></p>
                </div>          
            </div>
        );
    }
}

export default Jumbotron