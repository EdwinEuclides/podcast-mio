import us from "../assets/Avatar.png"
import logo from '../assets/Logo.png' 


import Browser from "./Browser"

export default function Header(){

    return(
        <>
        <div className="header">
           <img src= {logo} alt="Logo de la Compañia" />
            <Browser />
            <img src={us} alt="Usuario" />
        </div>
        
    </>
    )
}