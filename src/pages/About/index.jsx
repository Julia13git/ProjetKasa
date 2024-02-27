import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import CollapseList from "../../components/CollapseList";


function About ()  {
    return (
      <>
      <Header isAProposActive={true}/>
      <div className="home-maincontainer">
      <Banner image="/images/banner-apropos.svg" title=""/> 
      <CollapseList />   
      </div>
      <Footer />
      </>
    );
  };
  
  export default About;