import React from 'react';
import { Card } from 'primereact/card';

const Rank = ({ username, entries }) => {
	return (
		<article className="p-grid p-justify-center">
			<div className="p-col-4">
				<Card title={username}>{`${entries} images scanned`}</Card>
			</div>
		</article>
	);
};

export default Rank;
