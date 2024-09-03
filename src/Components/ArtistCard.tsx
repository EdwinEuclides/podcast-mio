<<<<<<< HEAD
import estilos from "./Styles.module.css";
=======
import "./index.css"
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8

type Props = {
    src: string;
    name: string;
    songs: string;
  };

  export default function ArtistCard(props:Props){
    const {name, src, songs} = props;
    return(
<<<<<<< HEAD
      <div className={estilos.artistCard}>
=======
      <div className="artist-card">

>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
          <img src= {src} alt={`Img de: ${name}`} />
          <h2>{name}</h2>
          <p>Songs: {songs}</p>
      </div>
    );
  }

