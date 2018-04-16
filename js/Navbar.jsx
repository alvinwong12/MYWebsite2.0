import React from 'react';

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a href="#jumbotron" className="nav-link">HOME</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">ABOUT</a></li>
                        <li className="nev-item"><a href="#projects" className="nav-link">PROJECTS</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">CONTACT</a></li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="../src/files/Alvin Wong Resume.pdf" target="_blank" className="nav-link">RESUME</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;