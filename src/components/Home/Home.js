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
                        Hey there!
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