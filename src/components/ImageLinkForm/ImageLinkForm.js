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
				<form>
					<span className="p-float-label">
						<InputText id="url" value={inputURL} onChange={(e) => this.setUrl(e.target.value)} />
						<label htmlFor="url">URL</label>
					</span>
					<Button label="Search" className="p-button-raised p-button-rounded" />
				</form>
			</article>
		);
	}
}

export default ImageLinkForm;
