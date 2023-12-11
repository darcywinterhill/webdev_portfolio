import "../pages/styling/MiscPage.css";

const SpotifyPlayer = () => {
  return ( 
    <div className="SpotifyWrapper">
    <iframe 
      title="player"
      style={{borderRadius: "12px"}}
      src="https://open.spotify.com/embed/playlist/7w5m3PCJGfJQoXH7Vcn5e6?utm_source=generator" 
      // width="300"
      width="100%"
      // height="auto" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
    </div>
  )
}

export default SpotifyPlayer;