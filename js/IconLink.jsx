import React from 'react';

class IconLink extends React.Component{
    render(){
        return (
            <a href={this.props.link} target="_blank" className="icon-link">
                {/* <i class="fa fa-twitter fa-2x"></i> */}
                <span className="fa-stack fa-lg" >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className={this.props.inverseColour ? "fa fa-stack-1x fa-inverse fa-" + this.props.icon : "fa fa-stack-1x fa-" + this.props.icon}></i>
                </span>
			</a>
        );
    }
}

IconLink.defaultProps = {
    inverseColour: false
};

export default IconLink;