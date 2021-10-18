import React from 'react';
import { FileUpload } from 'primereact/fileupload';

const ImageLinkForm = () => {
	return (
		<article>
			<p>{'Input any photo to detect faces in the picture'}</p>
			<form>
				<FileUpload name="photo" url="" />
			</form>
		</article>
	);
};

export default ImageLinkForm;
