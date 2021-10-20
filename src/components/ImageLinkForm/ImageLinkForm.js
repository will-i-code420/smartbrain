import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ImageLinkForm = ({ inputUrl, onUrlInput, submitUrl }) => {
	return (
		<article>
			<p>{'Input any photo to detect faces in the picture'}</p>
			<form className="p-fluid">
				<div className="p-field p-grid p-justify-center">
					<div className="p-col-4">
						<InputText value={inputUrl} onChange={onUrlInput} />
					</div>
					<div className="p-col-2">
						<Button label="Search" className="p-button-raised" onClick={submitUrl} />
					</div>
				</div>
			</form>
		</article>
	);
};

export default ImageLinkForm;
