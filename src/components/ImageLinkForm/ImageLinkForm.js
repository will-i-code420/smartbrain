import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './ImageLinkForm.css';

const ImageLinkForm = ({ inputUrl, onUrlInput, submitUrl }) => {
	return (
		<article>
			<p>{'Input any photo to detect faces in the picture'}</p>
			<form className="p-fluid">
				<div id="image-link-form" className="p-field p-grid p-nogutter p-py-4">
					<div className="p-offset-4 p-col-3">
						<InputText value={inputUrl} onChange={onUrlInput} />
					</div>
					<div className="p-col-1">
						<Button label="Search" className="p-button-raised" onClick={submitUrl} />
					</div>
				</div>
			</form>
		</article>
	);
};

export default ImageLinkForm;
