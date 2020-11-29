import React, { Component } from 'react';
import axios from 'axios';

class PrescriptionImage extends Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }
    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('prescriptionUploads',this.state.selectedFile,this.state.selectedFile.name);
        axios
        .post('/api/v1/prescriptionUploads', fd, {
            onUploadProgress: ProgressEvent => {
                    console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button type="submit" onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}

export default PrescriptionImage;