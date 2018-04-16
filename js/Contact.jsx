import React from 'react';

class Contact extends React.Component{
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Contact Me</h1>
                <div className = "spacing-sm"></div>
                <div className="bar centre"></div>
                <div className = "spacing-lg"></div>
                <div className="row">
                    <div className="col">
                        <p><span className="fa fa-whatsapp"></span>&nbsp;&nbsp;+1 647 988 8346</p>
                        <p><span className="fa fa-envelope"></span>&nbsp;&nbsp;alvinwong312@gmail.com</p>
                        <p>SOCIAL MEDIA</p>
    
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