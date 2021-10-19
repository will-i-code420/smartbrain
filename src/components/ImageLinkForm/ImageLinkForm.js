import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

class ImageLinkForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputURL: ''
		};
	}
	setUrl = (url) => {
		this.setState({ inputURL: url });
	};
	render() {
		const { inputURL } = this.state;
		return (
			<article>
				<p>{'Input any photo to detect faces in the picture'}</p>
				<form className="p-fluid">
					<div className="p-field p-grid p-justify-center">
						<div className="p-col-4">
							<InputText id="url" value={inputURL} onChange={(e) => this.setUrl(e.target.value)} />
						</div>
						<div className="p-col-2">
							<Button label="Search" className="p-button-raised p-button-rounded" />
						</div>
					</div>
				</form>
			</article>
		);
	}
}

export default ImageLinkForm;
