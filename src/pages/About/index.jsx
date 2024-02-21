import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";


function About ()  {
    return (
      <>
      <Header />
      <div className="home-maincontainer">
      <Banner image="/images/banner-apropos.svg" title=""/> 
      <Collapse />   
      </div>
      <Footer />
      </>
    );
  };
  
  export default About;