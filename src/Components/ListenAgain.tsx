

import ArtistCard from "./ArtistCard";
import estilos from "./Styles.module.css";


const SONGS=[
    {
        src :'./src/assets/listenAgain/ListenAgain1.png',
        name:"Ryan Jones",      
        songs:"68"
    },
    {
        src: "./src/assets/listenAgain/ListenAgain2.png",
        name:"Children",
        songs:"5400"
    },
    {
        src: "./src/assets/listenAgain/ListenAgain3.png",
        name:"Stabboy",
        songs:"150"
    },
    {
        src: "./src/assets/listenAgain/ListenAgain4.png",
        name:"Ania Sznnadi",
        songs:"70"
    },
    {
        src: "./src/assets/listenAgain/ListenAgain5.png",
        name:"Arina Gra",
        songs:"100"
    }
];



export default function ListenAgain() {

    return(
        <div className={estilos.listenAgain}>
            {SONGS.map((song) => (
                <ArtistCard 
                    key={song.name} 
                    src = {song.src} 
                    name={song.name}
                    songs={song.songs}
                />
                ))
            }
        </div>
  );
}

