<<<<<<< HEAD
import estilos from "./Styles.module.css";
=======
import "./index.css"
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8

type Props = {
    src: string;
    suscribers: string;
  };

  export default function SongCard({src, suscribers}:Props){
<<<<<<< HEAD
    
    return(
      <div className={estilos.songCard}>
          <img src= {src} />
          <h2>Listen Again</h2>
          <p>Suscribers: {suscribers}</p>: 
      </div>
    );
  }
=======
    //const {src, suscribers} = props;
    return(
      <div className="song-card">
          <img src= {src} />
          <h2>Listen Again</h2>
          <p>Suscribers: {suscribers}</p>
      </div>
    );
  }

>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
