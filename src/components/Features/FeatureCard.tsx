import React from "react";
import styles from "../../styles/Globals";

interface FeatureCardI {
    iconUrl: string;
    iconText: string;
    linkUrl?: string;
}

const FeatureCard: React.FC<FeatureCardI> = ({
    iconText,
    iconUrl,
    linkUrl,
}) => {
    return (
        <button
            className={`${styles.featureCard}`}
            onClick={() => window.open(linkUrl, "_blank")}
        >
            <img className={`${styles.featureImg}`} src={iconUrl} alt="icon" />
            <p className={`${styles.featureText}`}>{iconText}</p>
        </button>
    );
};

export default FeatureCard;
