import React from 'react';
import Tilty from 'react-tilty';

const Logo = () => {
	return (
		<div>
			<Tilty style={{ transformStyle: 'preserve-3d' }}>
				<div style={{ transform: 'translateZ(30px)' }}>Logo Here</div>
			</Tilty>
		</div>
	);
};

export default Logo;
