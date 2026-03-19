import { useState } from "react";
import "./Dashboard.css";
import DashboardCard from "./DashboardCard";
import { InstagramEmbed } from 'react-social-media-embed';

const INSTAGRAM_URL = "https://www.instagram.com/binabean_knc/";
const CARPET_TIKTOK_PLAYER_URL = "https://www.tiktok.com/player/v1/7612391846542675231";
const SPOTIFY_URL = "https://open.spotify.com/embed/track/6A4wVKbcg0mRriCFjZzX0Z?utm_source=generator";

const VERSIONS = [
    { key: "work", label: "Work" },
    { key: "life", label: "Life" },
];

const WORK_CARDS = [
    {
        id: "current-project",
        header: "Current Project",
        title: "Learning Godot: Cozy Game Prototype",
        text: "Stepping outside of enterprise full-stack development to explore game design. I'm building a low-stress, cozy experience with things I love while teaching myself the fundamentals of the Godot engine.",
        footer: "Now - ???",
        listItems: [
            { label: "The Goal:", text: "Creating a relaxing experience with simple, satisfying interactions." },
            { label: "Learning:", text: "GDScript, scene-tree architecture, and pixel art." },
            { label: "Current Focus:", text: "Create a fun playable loop for the base game." },
        ],
        chips: ["Godot Engine", "GDScript", "Game Design Basics", "Pixel Art", "Problem Solving"],
    },
    {
        id: "swe-intern-june",
        header: "Work Background",
        title: (
            <>
                Software Engineer Intern @ <a className="dashboard-inline-link" href="https://www.juneapp.ai/" target="_blank" rel="noopener noreferrer">June</a>
            </>
        ),
        text: "A high-impact internship focused on bringing AI-driven features to the hiring workflow.",
        footer: "June 2025 - Dec 2025",
        accomplishments: [
            {
                label: "UI Overhaul",
                text: "I led the revamp of the platform's user interface, moving from fragmented designs to a standardized, responsive component library. This improved design consistency and made future feature development much faster.",
            },
            {
                label: "AI & Data",
                text: "I optimized the AI prompts for our chat capabilities, ensuring higher quality interview interactions. To make the system smarter, I also built a custom tracking tool for interview question data.",
            },
        ],
        chips: ["React", "JavaScript", "Python", "OpenAI API", "Google Cloud", "CSS", "PostgreSQL", "AirTable", "Figma", "Cursor", "Ngrok", "Twilio", "Redis", "Github"],
    },
    {
        id: "ms-cs",
        header: "Academics",
        title: (
            <>
                MS in Computer Science @ <a className="dashboard-inline-link" href="https://www.georgetown.edu/" target="_blank" rel="noopener noreferrer">Georgetown University</a>
            </>
        ),
        text: "Dedicated to mastering the basics and exploring the state-of-the-art in AI, focusing on how modern machine learning can solve complex, real-world problems.",
        footer: "Graduated Dec 2025",
        accomplishments: [
            {
                label: "Lexical Simplification",
                text: "Replicated the LSBert pipeline and engineered a custom validation layer using a fine-tuned DeBERTa model for CEFR classification to empirically measure simplification effectiveness.",
            },
            {
                label: "Meta-RL (Reinforcement Learning)",
                text: "Proposed a Meta-Baseline solution using CVaR and Reptile-style updates with PPO to mitigate gradient variance in cross-subgenre transfer for Atari games.",
            },
            {
                label: "Emotion Detection (SemEval 2025)",
                text: "Implemented a Multi-task dual-head XLM-RoBERTa framework with back-translation to bridge gaps in text-based emotion distribution tasks.",
            },
            {
                label: "Diffusion Models",
                text: "Fine-tuned StoryGen on the PororoSV dataset, optimizing image generation consistency and evaluating performance via FID and CLIP scores.",
            },
            {
                label: "UX Research & Engineering",
                text: "Conducted user research and iterative prototyping, from paper to high-fidelity Figma, to build a specialized time management tool.",
            }
        ],
        chips: ["Deep Learning", "LLMs", "NLP", "Reinforcement Learning", "Text Mining", "Human Centered Computing", "Python", "PyTorch", "HuggingFace", "Figma", "Jupyter Notebooks", "GitHub"],
    },
    {
        id: "sde-ii-expedia",
        header: "Work Background",
        title: (
            <>
                SDE II @ <a className="dashboard-inline-link" href="https://www.expediagroup.com/" target="_blank" rel="noopener noreferrer">Expedia Group</a>
            </>
        ),
        text: "Focused on building partner-facing platforms and micro-frontend architectures with global impact.",
        footer: "Aug 2022 - May 2024",
        accomplishments: [
            {
                label: "Frontend & UI Systems",
                text: "Developed a high-visibility partner dashboard and contributed to the EG Console using a server-driven UI and micro-frontend architecture. I implemented universal login, account management menus, and led global localization efforts to ensure a seamless experience for global users.",
            },
            {
                label: "Backend & Service Layer",
                text: "Architected REST APIs for Vrbo lodging services using Kotlin and Spring Boot, adding secure file upload/download functionality for customer messaging. I also contributed to the backend services supporting the EG Console platform to integrate various partner tools.",
            },
            {
                label: "Reliability & DevOps",
                text: "Optimized CI/CD workflows via GitHub Actions and established comprehensive monitoring using Datadog, Splunk, and Catchpoint to ensure high-scale platform stability.",
            },
            {
                label: "Testing & Quality",
                text: "Implemented rigorous Jest unit tests and Catchpoint performance monitors to track application health. I also facilitated smooth sub-application ownership transitions by documenting technical requirements for stakeholder feedback.",
            }
        ],
        chips: ["React", "TypeScript", "GraphQL", "Kotlin", "Spring Boot", "GitHub Actions", "Datadog", "Splunk", "Jest", "Jira", "Confluence", "Figma", "Catchpoint"],
    },
    {
        id: "sde-intern-expedia",
        header: "Work Background",
        title: (
            <>
                SDE Intern @ <a className="dashboard-inline-link" href="https://www.expediagroup.com/" target="_blank" rel="noopener noreferrer">Expedia Group</a>
            </>
        ),
        text: "Engineered a specialized internal tool for the Vrbo iOS app to improve developer efficiency and real-time data visibility.",
        footer: "Summer 2021",
        accomplishments: [
            {
                label: "Developer Tooling",
                text: "Built a debugging tool for the Vrbo iOS app that displayed live analytics events as an overlay, significantly reducing debugging time by providing real-time visibility into analytic messages.",
            }
        ],
        chips: ["Swift", "Xcode", "iOS Development", "Figma", "Jira", "Confluence"],
    },
    {
        id: "bs-ece",
        header: "Academics",
        title: (
            <>
                BS in Electrical & Computer Engineering @ <a className="dashboard-inline-link" href="https://www.utexas.edu/" target="_blank" rel="noopener noreferrer">The University of Texas at Austin</a>
            </>
        ),
        text: "Focused on the intersection of hardware and software with a Minor in Business, building a strong foundation in low-level computing and scalable software engineering.",
        footer: "Graduated May 2022",
        accomplishments: [
            {
                label: "UT-Review Platform",
                text: "Developed a specialized class and professor review website specifically for the UT student community, focusing on improving academic transparency and user experience.",
            },
            {
                label: "Docker-Scan",
                text: "Built a security-focused tool to scan Dockerfiles, identifying required packages and auditing their current status to ensure container environment integrity.",
            },
            {
                label: "Instructional Leadership",
                text: "Served as an ECE Tutor, guiding students through complex topics including digital logic, stack operations, and LC3 assembly programming.",
            }
        ],
        chips: ["C/C++", "Java", "Docker", "Linux", "Digital Logic", "Assembly"],
    },
];

const LIFE_CARDS = [
    {
        id: "crochet-wip",
        header: "On the Hook",
        title: "Current Project: Moss Carpet",
        text: (
            <>
                <p>
                    Moss carpet has been super popular, so I wanted one for myself. It's much more time-consuming than I expected, but I'm loving the process and the way the texture is turning out!
                </p>
                <div className="dashboard-tiktok-player">
                    <iframe
                        src={CARPET_TIKTOK_PLAYER_URL}
                        title="Moss carpet TikTok"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </>
        ),
        footer: "Target Finish: ???",
    },
    {
        id: "crochet",
        header: "Hobby",
        title: "Crochet",
        text: (
            <>
                <p>
                    A creative outlet that allows me to unwind and express myself through crafting. I enjoy making cozy blankets,
                    cute clothings, and personalized gifts for friends and family.
                </p>
                <div className="dashboard-embed-wrap">
                    <InstagramEmbed url={INSTAGRAM_URL} width="100%" />
                </div>
            </>
        ),
        footer: "2022 - Now",
    },
    {},
    {
        id: "music",
        header: "Favorite Tunes",
        title: "Current On Repeat",
        text: (
            <>
                <div className="dashboard-embed-wrap">
                    <iframe title="Spotify Embed" data-testid="embed-iframe" style={{ borderRadius: "12px", display: "block", border: "none" }} src={SPOTIFY_URL} width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </>
        ),
        footer: "Always Exploring",
    }
]

function Dashboard() {
    const [version, setVersion] = useState("work");
    const [expandedCards, setExpandedCards] = useState({});
    const cards = version === "work" ? WORK_CARDS : LIFE_CARDS;
    const leftColumnCards = cards.filter((_, index) => index % 2 === 0);
    const rightColumnCards = cards.filter((_, index) => index % 2 === 1);

    function toggleCardDetails(cardId) {
        setExpandedCards((previous) => ({
            ...previous,
            [cardId]: !previous[cardId],
        }));
    }

    function renderCard(card) {
        return (
            card.id && <DashboardCard
                key={card.id}
                header={card.header}
                title={card.title}
                text={card.text}
                footer={card.footer}
            >
                {card.listItems && (
                    <ul className="dashboard-card-list">
                        {card.listItems.map((item, index) => (
                            <li key={`${card.id}-list-${index}`}>
                                {item.label && <strong>{item.label}</strong>}
                                {item.label && " "}
                                {item.text}
                            </li>
                        ))}
                    </ul>
                )}

                {card.accomplishments && (
                    <div className="dashboard-story-section">
                        {card.accomplishments.map((block, index) => {
                            const blockId = `${card.id}-story-${index}`;
                            const isExpanded = expandedCards[blockId];
                            return (
                                <p key={blockId}>
                                    <strong>{block.label}</strong>
                                    <button
                                        type="button"
                                        className="dashboard-story-toggle-icon"
                                        onClick={() => toggleCardDetails(blockId)}
                                        aria-label={isExpanded ? "Collapse highlight" : "Expand highlight"}
                                    >
                                        {isExpanded ? <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1" /> : <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/forward--v1.png" alt="forward--v1" />}
                                    </button>
                                    {isExpanded ? block.text : null}
                                </p>
                            )
                        })}
                    </div>
                )}

                {card.chips && (
                    <ul className="dashboard-chip-row">
                        {card.chips.map((chip) => (
                            <span key={`${card.id}-${chip}`} className="dashboard-chip">{chip}</span>
                        ))}
                    </ul>
                )}
            </DashboardCard>
        );
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-toolbar">
                <div className="dashboard-version-buttons" role="tablist" aria-label="Dashboard views">
                    {VERSIONS.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            id={`dashboard-tab-${item.key}`}
                            role="tab"
                            aria-selected={version === item.key}
                            aria-controls={`dashboard-panel-${item.key}`}
                            className={`dashboard-version-btn ${version === item.key ? "active" : ""}`}
                            onClick={() => setVersion(item.key)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <section
                id={`dashboard-panel-${version}`}
                role="tabpanel"
                aria-labelledby={`dashboard-tab-${version}`}
                className={`dashboard-canvas ${version}`}
                data-theme={version}
            >
                <div className="dashboard-cards-grid">
                    <div className="dashboard-cards-column">
                        {leftColumnCards.map(renderCard)}
                    </div>
                    <div className="dashboard-cards-column">
                        {rightColumnCards.map(renderCard)}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
