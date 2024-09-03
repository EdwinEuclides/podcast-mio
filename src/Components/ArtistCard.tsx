import estilos from "./Styles.module.css";

type Props = {
    src: string;
    name: string;
    songs: string;
  };

  export default function ArtistCard(props:Props){
    const {name, src, songs} = props;
    return(
      <div className={estilos.artistCard}>
          <img src= {src} alt={`Img de: ${name}`} />
          <h2>{name}</h2>
          <p>Songs: {songs}</p>
      </div>
    );
  }

