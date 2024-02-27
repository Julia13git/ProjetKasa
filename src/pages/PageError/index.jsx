import React from "react";

//import { useRouteError } from 'react-router-dom'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Error from "../../components/Error";

function PageError () {
     //let error = useRouteError();
   //console.error(error);
    return (
        <>
        <Header />
        <div className="home-maincontainer">
                 
         <Error />

        </div>
        <Footer />
        </>
    )

}

export default PageError