import { useEffect, useState } from "react";
import "./Home.css";
import Data from "../data/data.json"
import Header from "../Components/Header/Header"
import Ball from "../Components/Ball/Ball";
import SobreMi from "../Components/SobreMi/SobreMi";
import Cursos from "../Components/Cursos/Cursos";

function Home () {

    const [info, setInfo] = useState([]);
  
    useEffect(() => {
      setInfo(Data.cursos);
    }, []); 


    return(
        <>
        <Header></Header>
        <Ball></Ball>
        <SobreMi></SobreMi>
        <Cursos 
        infoCursos={info}
        />
        </>

    );
 
}


export default Home;