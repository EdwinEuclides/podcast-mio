import { Dispatch, FormEvent } from "react"

type FormProps = {
    agregando: boolean;
    setAgregando: Dispatch<React.SetStateAction<boolean>>;
  };
  
export default function PlayList({agregando, setAgregando}:FormProps){

    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("submiteando")
        setAgregando(!agregando)
    }
    
    return(
        <div>
            <input type="text" placeholder="🔎 search..."></input>
            <h2>Creá tu playlist</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" placeholder="Título"></input>

                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Título"></input>

                <label htmlFor="imgURL">Images (url)</label>
                <input type="text" id="imgURL" placeholder="Images (url)"></input>

                <button type="submit"> Agregar </button>

            </form>
        </div>
    )
}