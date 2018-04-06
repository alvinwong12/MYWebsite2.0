import React from 'react';

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#content-navbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
					</div>
                    <div className="collapse navbar-collapse" id="content-navbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#jumbotron" >HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="../src/files/Alvin Wong Resume.pdf" target="_blank">Resume</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;