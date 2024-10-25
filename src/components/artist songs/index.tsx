import "./artistsongs.css";
import { useLocation } from "react-router-dom";
import SongCart from "../song cart";
import { useEffect, useState } from "react";
import { useGlobalContex } from "../../context/global-context-provider";

function ArtistSongs() {
  const location = useLocation();
  const artistID = location.state.artistID;

  console.log("Artist ID:", artistID);

  const [artistSongs, setArtistSongs] = useState();

  const { getSongsOfArtist } = useGlobalContex();

  useEffect(() => {
    getSongsOfArtist(artistID).then((data: any) =>
      setArtistSongs(data?.tracks)
    );
  }, [artistID]);

  const [favData, setFavData] = useState();
  useEffect(() => {
    // getUserFavoriteSongs().then((data:any) => setFavData(data));
  }, []);
  artistSongs && console.log("artis songs", artistSongs);

  return (
    <div className="artistsonglist">
      {artistSongs?.map((data: any, index: any) => (
        <SongCart
          key={index}
          heading={
            data.name.length > 20
              ? data.name.substring(0, 20) + "..."
              : data.name
          }
          description={
            data.album.name.length > 30
              ? data.album.name.substring(0, 30) + "..."
              : data.album.name
          }
          imagesrc={data.album.images[0].url}
          id={data.id}
          uriToPlay={data.uri}
          favData={favData}
        />
      ))}
    </div>
  );
}

export default ArtistSongs;
