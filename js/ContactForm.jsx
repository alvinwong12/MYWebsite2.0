import React from 'react';
import ReactDOM from 'react-dom';
import Success from './Success.jsx';
import Fail from './Fail.jsx';
import Loading from './Loading.jsx';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Name",
            email: "Email",
            msg: "Msg"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.postURL = this.postURL.bind(this);
    }
    handleNameChange(e){
        this.state.name = e.target.value;
    }
    handleEmailChange(e){
        this.state.email = e.target.value;
    }
    handleMsgChange(e){
        this.state.msg = e.target.value;
    }
    postURL(){
        var host = window.location.host;
        var protocol = window.location.protocol;
        return protocol + "//" + host + '/message';
    }
    handleSubmit(e){
		e.preventDefault();
		var formData = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.msg
        };
		submit(formData, this.postURL());
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <input type='text' className="form-control square-input" placeholder="Name" name="name" onChange={this.handleNameChange} required/>
                </div>
                <div className="form-group">
                        <input type="email" className="form-control square-input" placeholder="Email" name="email" onChange={this.handleEmailChange} required/>
                </div>
                <div className="form-group">
                        <textarea className="form-control square-input" rows="3" placeholder="Message" name="message" onChange={this.handleMsgChange} required />
                </div>
                <button type="submit" className="btn btn-md btn-square btn-inverse pull-right btn-animated" id="submit-button">SUBMIT</button>
            </form>
        );
    }
}

export default ContactForm

function submit(formData, url){
	ReactDOM.render(
		<Loading />,
		document.getElementById("contact-form")
	);
	submitForm(formData, url);
};

function submitForm(formData, url){
	
	var http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState == 4){
				console.log(this.status);
				if (this.status == 200){
					// Get submit button
					render(true)
				}
				else{
					render(false)
				}
			}
					   
		};

		http.open('POST', url, true);
		http.setRequestHeader('Access-Control-Allow-Origin', '*');
		//http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		http.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		http.send(JSON.stringify(formData));
		
}

function render(success){
	if (success){
		ReactDOM.render(
			<Success />,
			document.getElementById("contact-form")
		);
	}
	else{
		ReactDOM.render(
			<Fail />,
			document.getElementById("contact-form")
		);
	}
}