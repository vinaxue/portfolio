import React, { Component } from "react";
import { Link } from "react-router";

import './Home.css'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <div className="content-text">
                    <p>
                        Hey there! My name is Vina Xue. I got a Master degree in Computer Science from <div className="georgetown">Georgetown University</div> and a Bachelor's degree in Computer Engineering from <div className="ut">the University of Texas, Austin</div>. I've also got some full-stack development experience under my belt.
                    </p>
                    <p>
                        If you want to chat or connect, feel free to <Link to="/contact">reach out</Link>!
                    </p>
                </div>
            </div>
        )
    }
}

export default Home 