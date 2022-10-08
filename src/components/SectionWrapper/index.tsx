import React from "react";
import assets from "../../assets";
import styles from "../../styles/Globals";
import Button from "../Button";

interface SectionWrapperI {
    title: string;
    description: string;
    showBtn?: boolean | undefined;
    reverse?: boolean | undefined;
    mockupImg: string;
    banner?: "banner" | "banner01" | "banner02" | "banner03" | undefined;
}

const SectionWrapper: React.FC<SectionWrapperI> = ({
    title,
    description,
    showBtn,
    reverse,
    mockupImg,
    banner,
}) => {
    return (
        <div
            className={`min-h-screen ${styles.section} ${
                reverse ? styles.bgWhite : styles.bgPrimary
            } ${banner}`}
        >
            <div
                className={`flex items-center ${
                    reverse ? styles.boxReverseClass : styles.boxClass
                } w-11/12 sm:w-full minmd:w-3/4`}
            >
                <div
                    className={`${styles.descDiv} 
                    ${reverse ? "fadeRightMini" : "fadeLeftMini"}
                    ${reverse ? styles.textRight : styles.textLeft}`}
                >
                    <h1
                        className={`
                    ${reverse ? styles.blackText : styles.whiteText}
                    ${styles.h1Text}`}
                    >
                        {title}
                    </h1>
                    <p
                        className={`
                    ${reverse ? styles.blackText : styles.whiteText}
                    ${styles.descriptionText}`}
                    >
                        {description}
                    </p>
                    {showBtn && (
                        <Button
                            assetUrl={assets.expo}
                            link="https://expo.dev/@muhammad_danial/NFT_App?serviceType=classic&dist"
                        />
                    )}
                </div>
                <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                    <img
                        className={`
                        ${reverse ? "fadeLefttMini" : "fadeRightMini"}
                        ${styles.sectionImg}`}
                        src={mockupImg}
                        alt="Mock Up"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper;
