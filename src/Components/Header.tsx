import us from "../assets/Avatar.png"
import logo from '../assets/Logo.png' 

<<<<<<< HEAD
import estilos from "./Styles.module.css"
=======
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8

import Browser from "./Browser"

export default function Header(){

    return(
        <>
<<<<<<< HEAD
        <div className={estilos.Header }>
=======
        <div className="header">
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
           <img src= {logo} alt="Logo de la Compañia" />
            <Browser />
            <img src={us} alt="Usuario" />
        </div>
        
    </>
    )
}