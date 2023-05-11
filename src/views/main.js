import React from "react";
import NavBar from "./sections/navbar";
import Header from "./sections/header";
import ExpertSec from "./sections/expert_sec";
import ProductGlanceSection from "./sections/product_glance_sec.js";
import OurSolutionSection from "./sections/our_solution_sec";
import Footer from "./sections/footer";

const styles = {
    section: {
        marginTop: "67px",
        marginBottom: "132px"
    },
    data3:{
        fontSize: "36px",
        fontWeight: 500,
        marginBottom: "50px",
    },
    sec: {
        position: "relative",
        color: "#fff",
        fontSize: "30px",
        height: "67px",
        width: "67px",
        display: "block",
        lineHeight: "67px",
        borderRadius: "50%",
        textAlign: "center",
        backgroundImage: "-moz-linear-gradient(90deg, #349091 0%, #00dbff 100%)",
        // backgroundImage: "-webkit-linear-gradient(90deg, #349091 0%, #00dbff 100%)",
        // backgroundImage: "-ms-linear-gradient(90deg, #349091 0%, #00dbff 100%)"
    },
    pGlance:{
        visibility: "visible",
        animationDelay: "0.5s",
        animationName: "fadeInUP"
    },
    data1:{
        visibility: "visible",
        animationDelay: "0.2s",
        animationName: "fadeInUP"
    },
    ex_sec:{
        visibility: "visible",
        animationName: "fadeInUP"
    }

}

const Main = () => {
    return (
        <>
        <NavBar />
        <Header />
        <ProductGlanceSection styles={styles} />
        <OurSolutionSection styles={styles} />
        <ExpertSec styles = {styles} />
        <Footer />
        </>
        

    )
}

export default Main;