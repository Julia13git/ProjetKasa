import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { housingList } from "../../datas/housingList";
import Housing from "../../components/Housing";

function Home() {
  return (
    <>
      <Header isAccueilActive={true} />
      <div className="home-maincontainer">
        <Banner
          image="/images/banner.png"
          title="Chez vous, partout et ailleurs"
        />
        <div className="card-list">
          {housingList.map((housing) => (
            <Housing key={housing.id} housing={housing} mode="card" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
