import React, { Component } from 'react'
import resumePdf from '../../res/YXResume Feb26.pdf'
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div className="resume-page">
                <iframe
                    title="Vina Xue Resume"
                    src={resumePdf}
                    className="resume-frame"
                />
                <p className="resume-fallback">
                    If the resume does not load, open it directly here:{' '}
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer">View Resume PDF</a>
                </p>
            </div>
        )
    }
}

export default Resume