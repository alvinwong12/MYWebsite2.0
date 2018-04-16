import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from  './Navbar.jsx';
import Spacing from  './Spacing.jsx';
import Jumbotron from './Jumbotron.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import ContactForm from './ContactForm.jsx';
import IconLink from './IconLink.jsx';
import Footer from './Footer.jsx';
import Project from './Project.jsx';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Jumbotron />, document.getElementById('jumbotron'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Project />, document.getElementById("project1"));
ReactDOM.render(<Project />, document.getElementById("project2"));
ReactDOM.render(<Project />, document.getElementById("project3"));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
ReactDOM.render(<IconLink icon="facebook" link="https://www.facebook.com/alvin.wong.353" inverseColour={true} />, document.getElementById('fb-icon'));
ReactDOM.render(<IconLink icon="linkedin" link="https://www.linkedin.com/in/alvin-wong-a02814123" inverseColour={true} />, document.getElementById('linkedin-icon'));
ReactDOM.render(<IconLink icon="github" link="https://github.com/alvinwong12" inverseColour={true} />, document.getElementById('github-icon'));
ReactDOM.render(<IconLink icon="snapchat-ghost" link="https://www.snapchat.com/add/alvinwong12" inverseColour={true} />, document.getElementById('snapchat-icon'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

