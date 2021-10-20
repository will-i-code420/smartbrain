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
			imageUrl: ''
		};
	}
	onUrlInput = (e) => {
		this.setState({ inputUrl: e.target.value });
	};
	submitUrl = (e) => {
		e.preventDefault();
		this.setState({ imageUrl: this.state.inputUrl });
		clarifai.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputUrl).then((res, err) => {
			if (err) return console.log(err);
			console.log(res.outputs[0].data.regions[0].region_info.bounding_box);
		});
	};
	render() {
		return (
			<div className="App">
				<ParticlesBackground />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onUrlInput={this.onUrlInput} submitUrl={this.submitUrl} />
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
