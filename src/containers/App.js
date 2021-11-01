import React, { Component } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const clarifai = new Clarifai.App({
	apiKey: process.env.REACT_APP_CLARIFAI_KEY
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignedIn: false,
			isSigningIn: false,
			isRegister: false,
			user: {
				id: '',
				name: '',
				username: '',
				email: '',
				entries: 0,
				joined: ''
			},
			inputUrl: '',
			imageUrl: '',
			faceBox: []
		};
	}
	displaySignIn = () => {
		this.setState({ isSigningIn: !this.state.isSigningIn });
	};
	displayRegister = () => {
		this.setState({ isRegister: !this.state.isRegister });
	};
	onUrlInput = (e) => {
		this.setState({ inputUrl: e.target.value });
	};
	loadUserInfo = (data) => {
		const { id, name, username, email, entries, joined } = data;
		this.setState({ user: { id, name, username, email, entries, joined } });
	};
	signOut = () => {
		this.setState({
			user: {
				id: '',
				name: '',
				username: '',
				email: '',
				entries: 0,
				joined: ''
			}
		});
		this.setState({ isSignedIn: !this.state.isSignedIn });
	};
	submitUrl = (e) => {
		e.preventDefault();
		this.setState({ imageUrl: this.state.inputUrl });
		clarifai.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputUrl)
			.then((res) => {
				if (res) {
					fetch('http://localhost:3031/image', {
						method: 'put',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ id: this.state.user.id })
					})
						.then((res) => res.json)
						.then((res) => {
							this.setState(Object.assign(this.state.user, { entries: res }));
						});
				}
				this.createFaceBox(this.calculateFaceLocation(res));
			})
			.catch((e) => {
				console.log(e);
			});
	};
	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('input-image');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		};
	};
	createFaceBox = (box) => {
		this.setState({ faceBox: box });
	};
	render() {
		const { user, isSignedIn, isSigningIn, isRegister, imageUrl, faceBox } = this.state;
		return (
			<div className="App">
				<ParticlesBackground />
				<Navigation
					isSignedIn={isSignedIn}
					displaySignIn={this.displaySignIn}
					displayRegister={this.displayRegister}
					signOut={this.signOut}
				/>
				<SignIn
					displaySignIn={this.displaySignIn}
					isSigningIn={isSigningIn}
					displayRegister={this.displayRegister}
					loadUserInfo={this.loadUserInfo}
				/>
				<Register
					displayRegister={this.displayRegister}
					isRegister={isRegister}
					register={this.register}
					loadUserInfo={this.loadUserInfo}
				/>
				<Logo />
				<Rank username={user.username} entries={user.entries} />
				<ImageLinkForm onUrlInput={this.onUrlInput} submitUrl={this.submitUrl} />
				<FaceRecognition imageUrl={imageUrl} faceBox={faceBox} />
			</div>
		);
	}
}

export default App;
