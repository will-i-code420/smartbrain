import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	inputUsername = (e) => {
		this.setState({ username: e.target.value });
	};
	inputPassword = (e) => {
		this.setState({ password: e.target.value });
	};
	signIn = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		const newUser = {
			username,
			password
		};
		fetch('http://localhost:3031/signin', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
			.then((res) => res.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUserInfo(user);
					this.props.displaySignIn();
				}
			});
	};
	render() {
		const { username, password } = this.state;
		return (
			<Dialog visible={this.props.isSigningIn} onHide={() => this.props.displaySignIn}>
				<Card title="Sign In">
					<form className="p-d-flex p-flex-column p-jc-center">
						<span className="p-float-label">
							<InputText id="username" name="username" value={username} onChange={this.inputUsername} />
							<label htmlFor="username">Username</label>
						</span>
						<span className="p-mt-2">
							<Password id="password" name="password" value={password} onChange={this.inputPassword} />
						</span>
						<div className="p-mb-3 p-as-center">
							<Button label="Log In" className="p-button-raised p-px-5" onClick={this.signIn} />
						</div>
						<div>
							<Button
								label="Register"
								className="p-button-raised p-mr-2"
								onClick={this.props.displayRegister}
							/>
							<Button label="Forgot Password" className="p-button-raised" onClick={this.signIn} />
						</div>
					</form>
				</Card>
			</Dialog>
		);
	}
}

export default SignIn;
