function joinClassNames(...classNames) {
    return classNames.filter(Boolean).join(" ");
}

function DashboardCard({
    className = "",
    header,
    title,
    subtitle,
    text,
    footer,
    imageSrc,
    imageAlt = "",
    imagePosition = "top",
    children,
    ...rest
}) {
    const imageClass = imagePosition === "bottom" ? "card-img-bottom" : "card-img-top";
    const shouldWrapText = typeof text === "string" || typeof text === "number";

    return (
        <article className={joinClassNames("dashboard-card", "card", className)} {...rest}>
            {imageSrc && imagePosition === "top" ? (
                <img className={joinClassNames("dashboard-card-img", imageClass)} src={imageSrc} alt={imageAlt} />
            ) : null}

            {header ? <div className="dashboard-card-header card-header">{header}</div> : null}

            <div className="dashboard-card-body card-body">
                {title ? <h5 className="dashboard-card-title card-title">{title}</h5> : null}
                {subtitle ? <h6 className="dashboard-card-subtitle card-subtitle">{subtitle}</h6> : null}
                {text ? (
                    shouldWrapText ? (
                        <p className="dashboard-card-text card-text">{text}</p>
                    ) : (
                        <div className="dashboard-card-text dashboard-card-rich-text">{text}</div>
                    )
                ) : null}
                {children}
            </div>

            {footer ? <div className="dashboard-card-footer card-footer">{footer}</div> : null}

            {imageSrc && imagePosition === "bottom" ? (
                <img className={joinClassNames("dashboard-card-img", imageClass)} src={imageSrc} alt={imageAlt} />
            ) : null}
        </article>
    );
}

export default DashboardCard;