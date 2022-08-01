import { useState } from "react";
import Pais from "./Pais";

const Options = ({pais, filtrar}) => {
    const [boton, setBoton] = useState(false)
    const handleButton = () => (
        setBoton(!boton)
    )
    if(boton===false){
        return(
            <li>{pais.name.common}<button onClick={handleButton}>show</button></li>
        )
    }else{
        return(
            <div>
                <li>{pais.name.common}<button onClick={handleButton}>show</button></li>
                <Pais pais={pais}/>
            </div>
        )
    }
}

export default Options;