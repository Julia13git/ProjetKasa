import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import { collapseTypes } from "../../datas/collapseTypes";

function About() {
  return (
    <>
      <Header isAProposActive={true} />
      <div className="home-maincontainer">
        <Banner image="/images/banner-apropos.svg" />
        <div className="collapse-list">
          {collapseTypes.map((collapse) => {
            return (
              <Collapse
                key={collapse.title}
                title={collapse.title}
                content={collapse.content}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
