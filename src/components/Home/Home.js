import React, { Component } from "react";
import { Link } from "react-router";

import './Home.css'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    renderProfessional() {
        return (
            <div className="content">
                <div className="content-text">
                    <p>
                        Hey there! I build applications. I'm a firm believer in clean code, git-flow, and the idea that no bug is truly unfixable if you have enough caffeine. I've navigated the full-stack lifecycle and lived to tell the tale.
                    </p>
                    <p>
                        If you want to chat or connect, feel free to <Link to="/contact">reach out</Link>!
                    </p>
                </div>
            </div>
        )
    }

    renderHuman() {
        return <div></div>
    }

    renderChaos() {
        return <div></div>
    }

    render() {
        const theme = this.props.theme || "professional"

        switch (theme) {
            case "professional":
                return this.renderProfessional()
            case "human":
                return this.renderHuman()
            case "chaos":
                return this.renderChaos()
            default:
                return this.renderProfessional()
        }
    }
}

export default Home 