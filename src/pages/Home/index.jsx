import React from "react";
//import Card from "../../components/Card";
import Banner from "../../components/Banner";
//import Cardlist from "../../components/Cardlist";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { housingList } from "../../datas/housingList";
import { Link } from "react-router-dom";
import Housing from "../../components/Housing";
//import '../../Card/card.scss'

function Home() {
  return (
    <>
      <Header isAccueilActive={true} />
      <div className="home-maincontainer">
        <Banner
          image="/images/banner.png"
          title="Chez vous, partout et ailleurs"
        />
        {/* <Cardlist /> */}

        <div className="card-list">
          {housingList.map((housing) => (
            <Link
              to={`/housing/${housing.id}`}
              key={housing.id}
              className="onecard"
            >
              {/* <Card src={housing.cover} alt={housing.title} /> */}
              <Housing src={housing.cover} alt={housing.title} mode="card" />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
