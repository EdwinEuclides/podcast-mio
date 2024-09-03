import us from "../assets/Avatar.png"
import logo from '../assets/Logo.png' 

import estilos from "./Styles.module.css"

import Browser from "./Browser"

export default function Header(){

    return(
        <>
        <div className={estilos.Header }>
           <img src= {logo} alt="Logo de la Compañia" />
            <Browser />
            <img src={us} alt="Usuario" />
        </div>
        
    </>
    )
}