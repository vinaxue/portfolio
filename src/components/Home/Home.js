import React, { Component } from "react";

import './Home.css'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <div className="intro">
                    <p>
                        Hey there! My name is Vina Xue. I'm currently a Master’s student in Computer Science at <div className="georgetown">Georgetown University</div>, diving deep into the exciting world of machine learning. I graduated from <div className="ut">the University of Texas, Austin</div> with a degree in Computer Engineering, and I've got some experience under my belt as a full-stack developer.
                    </p>
                    <p>
                        If you want to chat or connect, feel free to reach out!
                    </p>
                </div>
            </div>
        )
    }
}

export default Home 