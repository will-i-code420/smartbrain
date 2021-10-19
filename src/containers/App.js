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
//import FaceRecognition from '../components/FaceRecognition';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}
	particlesInit = (main) => {
		console.log(main);
	};
	particlesLoaded = (container) => {
		console.log(container);
	};
	render() {
		return (
			<div className="App">
				<ParticlesBackground />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm />
				{/*
        
        <FaceRecognition />*/}
			</div>
		);
	}
}

export default App;
