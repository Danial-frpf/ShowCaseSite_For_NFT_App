import React from "react";
import assets from "../../assets";
import styles from "../../styles/Globals";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <div className={`${styles.section} ${styles.bgPrimary} banner03 `}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
                        Technologies
                    </h1>
                    <p className={`${styles.pText} ${styles.whiteText}`}>
                        ProNef has been developed using a cross-platform
                        technology, React Native.
                    </p>
                    <div className={`${styles.flexWrap}`}>
                        <FeatureCard
                            iconUrl={assets.react}
                            iconText="React Native"
                            linkUrl="https://reactjs.org/docs/getting-started.html"
                        />
                        <FeatureCard
                            iconUrl={assets.javascript}
                            iconText="Javascript"
                            linkUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
