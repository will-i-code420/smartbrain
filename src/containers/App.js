import React, { Component } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import Particles from 'react-tsparticles';
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
				<Particles
					id="tsparticles"
					init={this.particlesInit}
					loaded={this.particlesLoaded}
					options={{
						fps_limit: 60,
						interactivity: {
							detectsOn: 'canvas',
							events: {
								onClick: {
									enable: true,
									mode: 'push'
								},
								onHover: {
									enable: true,
									mode: 'repulse'
								},
								resize: true
							},
							modes: {
								push: {
									particles_nb: 4
								},
								repulse: {
									distance: 200,
									duration: 0.4
								}
							}
						},
						particles: {
							color: {
								value: '#ffffff'
							},
							links: {
								color: '#ffffff',
								distance: 150,
								enable: true,
								opacity: 0.4,
								width: 1
							},
							move: {
								bounce: false,
								direction: 'none',
								enable: true,
								outMode: 'out',
								random: false,
								speed: 2,
								straight: false
							},
							number: {
								density: {
									enable: true,
									area: 800
								},
								value: 80
							},
							opacity: {
								value: 0.5
							},
							shape: {
								type: 'circle'
							},
							size: {
								random: true,
								value: 5
							}
						},
						detectRetina: true
					}}
				/>
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
