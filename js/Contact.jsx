import React from 'react';

class Contact extends React.Component{
    render(){
        return (
            <div className="container">
                <p className="text-center section-header h1">CONTACT</p>
                <div className = "spacing-sm"></div>
                <div className="bar centre"></div>
                <div className = "spacing-lg"></div>
                <div className = "spacing-lg"></div>
                <div className = "spacing-lg"></div>
                <p className="lead text-center content contact-content">Get in touch!</p>
                <div className = "spacing-md"></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <p className="content contact-content"><span className="fa fa-whatsapp"></span>&nbsp;&nbsp;+1 647 988 8346</p>
                        <p className="content contact-content"><span className="fa fa-envelope"></span>&nbsp;&nbsp;alvinwong312@gmail.com</p>
                        <div className = "spacing-lg"></div>
                        <div className = "spacing-lg"></div>
                        <div id="fb-icon" className="inline-icon"></div>
                        <div id="linkedin-icon"  className="inline-icon"></div>
                        <div id="github-icon"  className="inline-icon"></div>
                        <div id="snapchat-icon"  className="inline-icon"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 col-bottom-spacing">
                        <div id="contact-form"></div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Contact