import React from 'react';

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
        host = window.location.host;
        protocol = window.location.protocol;
        return protocol + "//" + host;
    }
    handleSubmit(e){
		e.preventDefault();
		var formData = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.msg
		};
		submit(formData, postURL());
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