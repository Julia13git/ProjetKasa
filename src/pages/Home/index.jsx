import React from "react";
import Banner from "../../components/Banner";
import Cardlist from "../../components/Cardlist";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
    return (
        <>
        <Header isAccueilActive={true}/>
        <div className="home-maincontainer">
            <Banner image="/images/banner.png" title="Chez vous, partout et ailleurs"/>
            <Cardlist />
        </div>
        <Footer />
        </>
    )
}

export default Home;