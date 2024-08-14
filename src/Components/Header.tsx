import us from "../assets/react.svg"
import logo from '../assets/Logo.svg'
import Browser from "./Browser"
export default function Header(){

    return(
        <div>
           <img src= {logo} alt="Logo de la Compañia" />
            <Browser />
            <img src={us} alt="Usuario" />
        </div>
    )
}