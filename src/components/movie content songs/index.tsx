import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./moviecontentsongs.css";
import SongCart from "../song cart";
import { useGlobalContex } from "../../context/global-context-provider";

function MoviecontentSongs() {
  const location = useLocation();
  const contenBoxId = location.state.contentBoxId;

  const [playlist, setPlaylist] = useState();

  const { getSongsByHeadingId, getUserFavoriteSongs } = useGlobalContex();

  useEffect(() => {
    console.log("cont id", contenBoxId);
    getSongsByHeadingId(contenBoxId).then((songs: any) =>
      setPlaylist(songs.items)
    );
  }, [contenBoxId]);

  //   const [favData, setFavData] = useState();
  //   useEffect(() => {
  //     getUserFavoriteSongs().then((data) => setFavData(data));
  //   }, []);

  return (
    <div className="container">
      {playlist?.slice(0, 28).map((data, index) => (
        <SongCart
          key={index}
          heading={
            data.track.name.length > 20
              ? data.track.name.substring(0, 20) + "..."
              : data.track.name
          }
          description={
            data.track.artists[0].name.length > 35
              ? data.track.artists[0].name.substring(0, 35) + "..."
              : data.track.artists[0].name
          }
          imagesrc={data.track.album.images[0].url}
          id={data.track.id}
          uriToPlay={data.track.uri}
          //   favData={favData}
        />
      ))}
    </div>
  );
}

export default MoviecontentSongs;
