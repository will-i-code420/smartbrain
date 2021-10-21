import React, { Component } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
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
			isLoggedIn: false,
			inputUrl: '',
			imageUrl: '',
			faceBox: []
		};
	}
	onUrlInput = (e) => {
		this.setState({ inputUrl: e.target.value });
	};
	submitUrl = (e) => {
		e.preventDefault();
		this.setState({ imageUrl: this.state.inputUrl });
		clarifai.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputUrl)
			.then((res) => {
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
		return (
			<div className="App">
				<ParticlesBackground />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onUrlInput={this.onUrlInput} submitUrl={this.submitUrl} />
				<FaceRecognition imageUrl={this.state.imageUrl} faceBox={this.state.faceBox} />
			</div>
		);
	}
}

export default App;
