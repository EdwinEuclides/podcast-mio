import SongCard from "./SongCard.tsx";
<<<<<<< HEAD
import estilos from "./Styles.module.css";
=======
import "./index.css";
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8

const SONGCARDS =[ 
    {
        src :'similarTo1.png',     
        suscribers:"4.02M"
    },
    {
        src :'similarTo2.png',     
        suscribers:"4.72M"
    },
    {
        src :'similarTo3.png',     
        suscribers:"6.25M"
    },
    {
        src :'similarTo4.png',     
        suscribers:"5.22M"
    },
    {
<<<<<<< HEAD
        src :'similarTo5.png', 
=======
        src :'similarTo5.png',     
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
        suscribers:"4.98M"
    }
    ]

    const path='./src/assets/similarTo/'

    export default function SimilarTo(){
        return(
<<<<<<< HEAD
            <div className={estilos.listenAgain}>
=======
            <div className="listen-again">
>>>>>>> d8877eb21783240ce13baf38af88952ecf94c9f8
                {SONGCARDS.map((song)=>(
                    <SongCard
                        key={`${song.src} - ${song.suscribers}`}
                        src={`${path}${song.src}`}
                        suscribers={song.suscribers}
                    />
                    ))
                }

            </div>
        );
    }