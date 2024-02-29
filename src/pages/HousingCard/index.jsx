import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import Housing from "../../components/Housing";
//import Carousel from "../../components/Carousel";
//import HousingItems from "../../components/HousingItems";

function HousingCard() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="home-maincontainer">
        {/* <Carousel id={id} /> */}
        {/* <HousingItems id={id} /> */}
        <Housing id={id} mode="full" />
      </div>
      <Footer />
    </>
  );
}
export default HousingCard;
