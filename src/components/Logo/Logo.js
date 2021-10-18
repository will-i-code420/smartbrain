import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';

const Logo = () => {
	return (
		<div>
			<Tilty style={{ transformStyle: 'preserve-3d' }}>
				<div style={{ transform: 'translateZ(30px)' }}>
					<img src={brain} alt="SmartBrain Logo" />
				</div>
			</Tilty>
		</div>
	);
};

export default Logo;
