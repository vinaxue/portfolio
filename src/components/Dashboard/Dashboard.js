import { useState } from "react";
import "./Dashboard.css";

const VERSIONS = ["professional", "human", "chaos"];

function Dashboard() {
    const [version, setVersion] = useState("professional");

    return (
        <div className="dashboard-page">
            <div className="dashboard-toolbar">
                <span className="dashboard-label">Dashboard Version</span>
                <div className="dashboard-version-buttons">
                    {VERSIONS.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={`dashboard-version-btn ${version === item ? "active" : ""}`}
                            onClick={() => setVersion(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <section className={`dashboard-canvas ${version}`}>
                <h2>Signals Dashboard ({version})</h2>
                <p>
                    This page is now the only place where version/theme changes happen.
                </p>
            </section>
        </div>
    );
}

export default Dashboard;
