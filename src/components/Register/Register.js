import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
	}
	inputUsername = (e) => {
		this.setState({ username: e.target.value });
	};
	inputEmail = (e) => {
		this.setState({ email: e.target.value });
	};
	inputPassword = (e) => {
		this.setState({ password: e.target.value });
	};
	register = (e) => {
		e.preventDefault();
		const { username, email, password } = this.state;
		const newUser = {
			username,
			email,
			password
		};
	};
	render() {
		const { username, email, password } = this.state;
		return (
			<Dialog visible={this.props.isRegister} onHide={() => this.props.displayRegister}>
				<Card title="Register">
					<form className="p-d-flex p-flex-column p-jc-center">
						<span className="p-float-label">
							<InputText id="username" value={username} onChange={this.inputUsername} />
							<label htmlFor="username">Username</label>
						</span>
						<span className="p-mt-2 p-float-label">
							<InputText id="email" value={email} onChange={this.inputEmail} />
							<label htmlFor="email">Email</label>
						</span>
						<span className="p-mt-2">
							<Password id="password" value={password} onChange={this.inputPassword} />
						</span>
						<div className="p-mb-3 p-as-center">
							<Button label="Register" className="p-button-raised p-px-5" onClick={this.register} />
						</div>
					</form>
				</Card>
			</Dialog>
		);
	}
}

export default Register;
