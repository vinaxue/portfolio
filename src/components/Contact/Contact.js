import React, { Component } from "react";

import './Contact.css'

class Contact extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <div className="content-text">
                    <p>
                        <img src="https://img.icons8.com/fluency-systems-regular/48/new-post.png" alt="new-post" className="contact-icon" />Email: <a href="mailto:yanglexue@gmail.com">yanglexue[at]gmail[dot]com</a>
                    </p>
                    <p>
                        <img src="https://img.icons8.com/forma-light/24/linkedin.png" alt="linkedin" className="contact-icon" />LinkedIn: <a href="https://www.linkedin.com/in/yangle-xue/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/yangle-xue/</a>
                    </p>
                    <p>
                        <img src="https://img.icons8.com/windows/32/github.png" alt="github" className="contact-icon" />GitHub: <a href="https://github.com/vinaxue" target="_blank" rel="noopener noreferrer">https://github.com/vinaxue</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact 