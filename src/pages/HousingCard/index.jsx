import React from "react"
import Header from "../../components/Header" 
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import HousingItems from "../../components/HouisingItems";

function HousingCard() {
    const { id } = useParams();

    return (
            <>
                <Header/>
                    <div className="home-maincontainer">
                        <Carousel id={id} />
                        <HousingItems id={id} />
                    </div>
                <Footer/>
            </>
    )
}
export default HousingCard