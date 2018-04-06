import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from  './Navbar.jsx';
import Spacing from  './Spacing.jsx';
import Jumbotron from './Jumbotron.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Jumbotron />, document.getElementById('jumbotron'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Projects />, document.getElementById('projects'));

