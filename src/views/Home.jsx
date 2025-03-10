import { useEffect, useState } from "react";
import "./Home.css";
import Data from "../data/data.json"
import Header from "../Components/Header/Header"
import Ball from "../Components/Ball/Ball";
import SobreMi from "../Components/SobreMi/SobreMi";
import Cursos from "../Components/Cursos/Cursos";
import Footer from "../Components/Footer/Footer";

function Home () {

    const [info, setInfo] = useState({});
  
    useEffect(() => {
      setInfo(Data.sobreMi);
    }, []); 


    return(
        <>
            <Header></Header>
            <Ball></Ball>
            <SobreMi 
            infoSobreMi={info}
            /> 
        </>
        

    );
 
}


export default Home;