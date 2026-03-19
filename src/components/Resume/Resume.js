import React from 'react'
import resumePdf from '../../res/YXResume.pdf'
import './Resume.css'

function Resume() {
    return (
        <div className="resume-page">
            <iframe
                title="Vina Xue Resume"
                src={resumePdf}
                className="resume-frame"
            />
            <p className="resume-fallback">
                If the resume does not load, open it directly here:{' '}
                <a className="resume-fallback-link" href={resumePdf} target="_blank" rel="noopener noreferrer">View Resume PDF</a>
            </p>
        </div>
    )
}

export default Resume