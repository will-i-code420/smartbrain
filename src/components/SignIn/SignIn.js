import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

const SignIn = ({
	isSigningIn,
	username,
	password,
	inputUsername,
	inputPassword,
	setRememberMe,
	rememberMe,
	signIn
}) => {
	return (
		<Dialog visible={isSigningIn}>
			<Card title="Sign In">
				<form className="p-d-flex p-flex-column p-jc-center">
					<span className="p-float-label">
						<InputText id="username" value={username} onChange={inputUsername} />
						<label htmlFor="username">Username</label>
					</span>
					<span className="p-mt-2">
						<Password id="password" value={password} onChange={inputPassword} />
					</span>
					<div className="p-my-3 p-as-center">
						<Checkbox id="remember" onChange={setRememberMe} checked={rememberMe} />
						<label htmlFor="remember" className="p-checkbox-label p-ml-2">
							Remember Me
						</label>
					</div>
					<div className="p-mb-3 p-as-center">
						<Button label="Log In" className="p-button-raised p-px-5" onClick={signIn} />
					</div>
					<div>
						<Button label="Register" className="p-button-raised p-mr-2" onClick={signIn} />
						<Button label="Forgot Password" className="p-button-raised" onClick={signIn} />
					</div>
				</form>
			</Card>
		</Dialog>
	);
};

export default SignIn;
