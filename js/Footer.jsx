import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <div className="container">
                <p className="footer"><i className="fa fa-copyright" aria-hidden="true"></i>&nbsp;{(new Date()).getFullYear()} Copyright Alvin Wong. All Rights Reserved.</p>
            </div>
        );
    }
};

export default Footer;