import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Register = ({ isRegister, username, email, password, inputUsername, inputEmail, inputPassword, register }) => {
	return (
		<Dialog visible={isRegister}>
			<Card title="Register">
				<form className="p-d-flex p-flex-column p-jc-center">
					<span className="p-float-label">
						<InputText id="username" value={username} onChange={inputUsername} />
						<label htmlFor="username">Username</label>
					</span>
					<span className="p-mt-2 p-float-label">
						<InputText id="email" value={email} onChange={inputEmail} />
						<label htmlFor="email">Email</label>
					</span>
					<span className="p-mt-2">
						<Password id="password" value={password} onChange={inputPassword} />
					</span>
					<div className="p-mb-3 p-as-center">
						<Button label="Register" className="p-button-raised p-px-5" onClick={register} />
					</div>
				</form>
			</Card>
		</Dialog>
	);
};

export default Register;
