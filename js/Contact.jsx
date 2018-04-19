import React from 'react';

class Contact extends React.Component{
    render(){
        return (
            <div className="container">
                <p className="text-center section-header h1">CONTACT</p>
                <div className = "spacing-sm"></div>
                <div className="bar centre"></div>
                <div className = "spacing-lg"></div>
                <p className="lead text-center content contact-content">Get in touch!</p>
                <div className = "spacing-md"></div>
                <div className="row">
                    <div className="col">
                        <p className="content contact-content"><span className="fa fa-whatsapp"></span>&nbsp;&nbsp;+1 647 988 8346</p>
                        <p className="content contact-content"><span className="fa fa-envelope"></span>&nbsp;&nbsp;alvinwong312@gmail.com</p>
                        <p className="section-subheader h3">SOCIAL MEDIA</p>
                        <div id="fb-icon" className="inline-icon"></div>
                        <div id="linkedin-icon"  className="inline-icon"></div>
                        <div id="github-icon"  className="inline-icon"></div>
                        <div id="snapchat-icon"  className="inline-icon"></div>
                    </div>
                    <div className="col">
                        <div id="contact-form"></div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Contact