import estilos from "./Styles.module.css";

type Props = {
    src: string;
    suscribers: string;
  };

  export default function SongCard({src, suscribers}:Props){
    
    return(
      <div className={estilos.songCard}>
          <img src= {src} />
          <h2>Listen Again</h2>
          <p>Suscribers: {suscribers}</p>: 
      </div>
    );
  }