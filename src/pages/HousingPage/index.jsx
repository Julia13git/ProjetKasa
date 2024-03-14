import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import Housing from "../../components/Housing";
import { housingList } from "../../datas/housingList";
import PageError from "../PageError";

function HousingPage() {
  const { id } = useParams();
  const housing = housingList.find((housing) => housing.id === id);
  if (!housing) {
    return <PageError />;
  }
  return (
    <>
      <Header />
      <div className="home-maincontainer">
        <Housing housing={housing} mode="full" />
      </div>
      <Footer />
    </>
  );
}
export default HousingPage;
