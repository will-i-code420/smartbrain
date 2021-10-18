import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
//import FaceRecognition from '../components/FaceRecognition';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm />
			{/*
			
      <FaceRecognition />*/}
		</div>
	);
}

export default App;
