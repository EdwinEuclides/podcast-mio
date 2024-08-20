import "./index.css"

type Props = {
    src: string;
    suscribers: string;
  };

  export default function SongCard({src, suscribers}:Props){
    //const {src, suscribers} = props;
    return(
      <div className="song-card">
          <img src= {src} />
          <h2>Listen Again</h2>
          <p>Suscribers: {suscribers}</p>
      </div>
    );
  }

