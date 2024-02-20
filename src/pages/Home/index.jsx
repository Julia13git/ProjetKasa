import Banner from "../../components/Banner";
import Cardlist from "../../components/Cardlist";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Home() {
    return (
        <>
        <Header />
        <div className="home-maincontainer">
            <Banner />
            <Cardlist />
        </div>
        <Footer />
        </>
    )
}

export default Home;