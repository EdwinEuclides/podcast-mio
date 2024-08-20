import SongCard from "./SongCard.tsx";
import "./index.css";

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
        src :'similarTo5.png',     
        suscribers:"4.98M"
    }
    ]

    const path='./src/assets/similarTo/'

    export default function SimilarTo(){
        return(
            <div className="listen-again">
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