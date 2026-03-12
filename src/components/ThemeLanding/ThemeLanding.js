import React from "react";
import { useNavigate } from "react-router";
import "./ThemeLanding.css";

const THEMES = [
    {
        id: "professional",
        label: "Professional",
        description: "Software Engineer",
        bg: "#e7e5df",
        text: "#2a2b2a",
        accent: "#a76d60",
    },
    {
        id: "human",
        label: "Human",
        description: "Yarn Enthusiast",
        bg: "#1a1a2e",
        text: "#e0e0e0",
        accent: "#a78bca",
    },
    {
        id: "chaos",
        label: "Chaos",
        description: "#$IU3457@$($#%572dfWfI@WE",
        bg: "#cce7f0",
        text: "#1a3a4a",
        accent: "#2980b9",
    },
];

function ThemeLanding({ onSelectTheme }) {
    const navigate = useNavigate();

    function handleSelect(themeId) {
        onSelectTheme(themeId);
        navigate("/home");
    }

    return (
        <div className="landing">
            <h1 className="landing-title">How would you like your Vina served?</h1>
            <p className="landing-subtitle">Choose one to get started</p>
            <div className="theme-options">
                {THEMES.map((theme) => (
                    <button
                        key={theme.id}
                        className="theme-btn"
                        style={{
                            backgroundColor: theme.bg,
                            color: theme.text,
                            borderColor: theme.accent,
                        }}
                        onClick={() => handleSelect(theme.id)}
                    >
                        <span
                            className="theme-btn-swatch"
                            style={{ backgroundColor: theme.accent }}
                        />
                        <span className="theme-btn-label">{theme.label}</span>
                        <span className="theme-btn-desc">{theme.description}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ThemeLanding;
