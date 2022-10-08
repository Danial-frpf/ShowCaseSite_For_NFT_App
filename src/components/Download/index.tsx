import React from "react";
import assets from "../../assets";
import styles from "../../styles/Globals";

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>
                        Download the source code
                    </h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>
                        Get the full source code on GitHub
                    </p>
                    <button
                        className={`${styles.btnPrimary}`}
                        onClick={() =>
                            window.open(
                                "https://github.com/Danial-frpf/NFT-app-front-end",
                                "_blank"
                            )
                        }
                    >
                        Source Code
                    </button>
                    <div className={`${styles.flexCenter}`}>
                        <img
                            className={`${styles.fullImg}`}
                            src={assets.scene}
                            alt="download_png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
