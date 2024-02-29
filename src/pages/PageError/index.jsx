import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Error from "../../components/Error";

function PageError() {
  return (
    <>
      <Header />
      <div className="home-maincontainer">
        <Error />
      </div>
      <Footer />
    </>
  );
}

export default PageError;
