

import ArtistCard from "./ArtistCard";
<<<<<<< HEAD
import estilos from "./Styles.module.css";
=======
import "./index.css";
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8


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
<<<<<<< HEAD
        <div className={estilos.listenAgain}>
=======
        <div className="listen-again">
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
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

