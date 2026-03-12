import React, { Component } from "react";
import { Link } from "react-router";

import headerImage from "../../res/header-image.jpg"
import avatar from "../../res/avatar.jpg"
import "./Header.css"

class Header extends Component {
    render() {
        const subtitlesByTheme = {
            professional: "Full-Stack Developer",
            human: "Yarn Enthusiast",
            chaos: "???"
        }
        const subtitle = subtitlesByTheme[this.props.theme] || subtitlesByTheme.professional

        const links = {
            professional: [
                { name: "Home", path: "/home" },
                { name: "Resume", path: "/resume" },
                { name: "Contact Me", path: "/contact" },
            ],
            human: [],
            chaos: []
        }

        return (
            <div className="header">
                <div className="top-nav-bar">
                    <ul className="top-nav-items">
                        {links[this.props.theme].map(link => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-image-container">
                    <img className="header-image" src={headerImage} alt="Jiangxi Landscape" />
                    <div className="header-image-credit">
                        Photo by <a className="header-image-credit-link" href="https://unsplash.com/@umbriferous?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Theodor Lundqvist</a> on <a className="header-image-credit-link" href="https://unsplash.com/photos/brown-wooden-houses-beside-river-WHhbYArwFt8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <div className="avatar-container">
                    <img className="avatar-image" src={avatar} alt="Vina Xue" />
                </div>
                <div className="name">
                    Vina Xue
                </div>
                <div className="subtitle">
                    {subtitle}
                </div>
            </div>
        )
    }
}

export default Header 