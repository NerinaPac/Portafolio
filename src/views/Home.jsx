import { useEffect, useState } from "react";
import "./Home.css";
import Data from "../data/data.json"
import Header from "../Components/Header/Header"
import Ball from "../Components/Ball/Ball";
import SobreMi from "../Components/SobreMi/SobreMi";
import Cursos from "../Components/Cursos/Cursos";

function Home () {

    const [info, setInfo] = useState({sobreMi:[], cursos:[]});
  
    useEffect(() => {
      setInfo(Data);
    }, []); 


    return(
        <>
        <Header></Header>
        <Ball></Ball>
        <SobreMi 
        infoSobreMi={info.sobreMi[0]}
        />
        <Cursos 
        infoCursos={info.cursos}
        />
        </>

    );
 
}


export default Home;