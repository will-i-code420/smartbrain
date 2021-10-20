import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="p-my-5 p-d-flex p-justify-center">
			<Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
				<div className="inner">
					<img src={brain} alt="SmartBrain Logo" />
				</div>
			</Tilty>
		</div>
	);
};

export default Logo;
