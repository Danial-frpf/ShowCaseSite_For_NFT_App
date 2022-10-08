import React from "react";
import assets from "../../assets";
import styles from "../../styles/Globals";

interface ButtonI {
    assetUrl: string;
    link: string;
}

const Button: React.FC<ButtonI> = ({ assetUrl, link }) => {
    return (
        <button
            className={`${styles.btnBlack} min-w-max`}
            onClick={() => window.open(link, "_blank")}
        >
            <img
                className={`${styles.btnIcon}`}
                src={assetUrl}
                alt="expo_button_icon"
            />
            <div className={`flex flex-col justify-start ml-4`}>
                <p className={`${styles.btnText} font-normal text-xs`}>
                    View it on
                </p>
                <p className={`${styles.btnText} font-bold text-sm`}>
                    Expo Store
                </p>
            </div>
        </button>
    );
};

export default Button;
