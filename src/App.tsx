import React from "react";
import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Globals";

const App = () => {
    return (
        <>
            <SectionWrapper
                title="Your own store of Nifty NFTs. Start Selling & Growing"
                description="But, store, collect NFTs, exchange & earn crypto. Join 25+ million people ProNef Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Smart User Interface market place"
                description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
                mockupImg={assets.homeCards}
                reverse
            />
            <Features />
            <SectionWrapper
                title="Deployment"
                description="ProNef is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands."
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screen. The first screen shows all NFTs while the second one shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner="banner02"
            />
            <Download />
            <div
                className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}
            >
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    Made with love by <span className={`bold`}>Danial</span>
                </p>
            </div>
        </>
    );
};

export default App;
