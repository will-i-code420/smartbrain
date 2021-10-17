import './App.css';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ImageLinkForm from '../components/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Logo />
			<ImageLinkForm />
			<FaceRecognition />
		</div>
	);
}

export default App;
