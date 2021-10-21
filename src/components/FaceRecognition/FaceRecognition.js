import React from 'react';
import { Image } from 'primereact/image';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, faceBox }) => {
	return (
		<div className="p-my-3">
			<Image id="input-image" src={imageUrl} alt="" />
			<div
				className="bounding-box"
				style={{
					top: faceBox.topRow,
					right: faceBox.rightCol,
					bottom: faceBox.bottomRow,
					left: faceBox.leftCol
				}}
			/>
		</div>
	);
};

export default FaceRecognition;
