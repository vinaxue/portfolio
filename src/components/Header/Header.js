import React, { Component } from "react";
import { Link } from "react-router";

import headerImage from "../../res/header-image.jpg"
import avatar from "../../res/avatar.jpg"
import "./Header.css"

class Header extends Component {
    constructor() {
        super()

        this.state = { isMenuOpen: false, currentPage: "HOME" }

        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this)
        this.getPageFromPath = this.getPageFromPath.bind(this)
    }

    handleMenuButtonClick() {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    getPageFromPath(path) {
        switch (path) {
            case '/home':
                return 'HOME';
            case '/contact':
                return 'CONTACT';
            default:
                return 'HOME';
        }
    }

    componentDidMount() {
        const path = window.location.pathname;
        this.setState({ currentPage: this.getPageFromPath(path) });
    }

    componentDidUpdate(prevProps, prevState) {
        const path = window.location.pathname;
        const newPage = this.getPageFromPath(path);
        if (prevState.currentPage !== newPage) {
            this.setState({ currentPage: newPage });
        }
    }

    render() {
        const subtitlesByTheme = {
            professional: "Full-Stack Developer",
            human: "Yarn Enthusiast",
            chaos: "???"
        }
        const subtitle = subtitlesByTheme[this.props.theme] || subtitlesByTheme.professional

        return (
            <div className="header">
                <div className="menu-section">
                    <div className="menu-container">
                        <button className="menu-button" onClick={this.handleMenuButtonClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                            </svg>
                        </button>
                        <div className="current-page">{this.state.currentPage}</div>
                    </div>
                    {
                        this.state.isMenuOpen && <div className="menu">
                            <ul className="menu-items">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Me</Link>
                                </li>
                            </ul>
                        </div>
                    }
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