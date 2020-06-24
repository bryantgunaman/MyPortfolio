import React, { Component } from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

class BusinessResume extends Component {
    render () {
        return (
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div style={{ height: '1000px' }}>
                    <Viewer fileUrl={process.env.PUBLIC_URL + "/Resumes/Bryant Gunaman's Computer Science Resume.pdf"} />
                </div>
                </Worker>
            </div>
        )
    }
}

export default BusinessResume;

