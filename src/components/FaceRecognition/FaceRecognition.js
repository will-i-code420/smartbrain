import React from 'react';
import { Image } from 'primereact/image';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="p-my-3">
			<Image src={imageUrl} alt="" />
		</div>
	);
};

export default FaceRecognition;
