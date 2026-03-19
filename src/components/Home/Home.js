import React from "react";
import { Link } from "react-router";

import './Home.css'

function Home() {
    return (
        <div className="content">
            <div className="content-text">
                <p>
                    Hey there! I build applications. I believe in clean code, git-flow, and the idea that no bug is truly unfixable if you have enough caffeine. I've navigated the full-stack lifecycle and lived to tell the tale.
                </p>
                <p>
                    When I'm not coding, you can find me untangling yarn or trying to keep my plants alive (this is a flop so far...).
                </p>
                <p>
                    To learn more about me, check out my <Link to="/resume">resume</Link> or explore who I am <Link to="/about-me">here</Link>.
                </p>
                <p>
                    If you want to chat or connect, feel free to <Link to="/contact">reach out</Link>. I'm super nice I promise!
                </p>
            </div>
        </div>
    )
}

export default Home 