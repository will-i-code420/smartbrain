import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notSignedIn: [
				{
					label: 'Sign In',
					icon: 'pi pi-fw pi-sign-in',
					command: this.props.displaySignIn
				},
				{ label: 'Register', icon: 'pi pi-fw pi-id-card', command: this.props.displayRegister }
			],
			signedIn: [
				{ label: 'Settings', icon: 'pi pi-fw pi-user-edit' },
				{ label: 'Sign Out', icon: 'pi pi-fw pi-sign-out', command: this.props.signOut }
			],
			activeIndex: 0
		};
	}
	setActiveIndex = (i) => {
		this.setState({ activeIndex: i });
	};
	render() {
		const { notSignedIn, signedIn, activeIndex } = this.state;
		return (
			<nav>
				<TabMenu
					model={this.props.isSignedIn ? signedIn : notSignedIn}
					activeIndex={activeIndex}
					onTabChange={(e) => this.setActiveIndex(e.value)}
				/>
			</nav>
		);
	}
}

export default Navigation;
