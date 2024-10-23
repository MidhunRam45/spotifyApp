import { useEffect, useState } from "react";
import "./moviecontent.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContex } from "../../context/global-context-provider";
// import ContentBoxSongs from "../contentBoxSongs/ContentBoxSongs";
// import { useUserContext } from "../../context/UserContext";

type props = {
  description: string;
  maincontent: string;
};

function Moviecontent({ description, maincontent }: props) {
  // function Moviecontent() {
  const [songDetails, setSongDetails] = useState(null);
  const [movieContentId, setmovieContentId] = useState(null);
  const navigator = useNavigate();

  const { getIdOfSongs, getSongsById } = useGlobalContex();

  useEffect(() => {
    if (maincontent) {
      getIdOfSongs({
        endpoint: "search",
        query: maincontent,
        type: "playlist",
      }).then((playlistId: any) => {
        setmovieContentId(playlistId);
        getSongsById(playlistId).then((songs: any) => setSongDetails(songs));
      });
    }
  }, [maincontent]);

  //   useEffect(() => {
  //     if (maincontent) {
  //       getIdOfSongs(maincontent).then((songId) => {
  //         if (songId) {
  //           setmovieContentId(songId);
  //           getSongsByHeadingId(songId).then((songs) => {
  //             setSongDetails(songs);
  //           });
  //         }
  //       });
  //     }
  //   }, [maincontent]);

  // Conditional rendering for the image
  let imageUrl = "";
  if (songDetails && songDetails?.items && songDetails?.items.length > 0) {
    const { items } = songDetails;
    if (
      items[1]?.track?.album?.images &&
      items[1].track.album.images.length > 0
    ) {
      imageUrl = items[1].track.album.images[1].url;
    }
  }

  const handleClick = () => {
    navigator("movie-content-songs", {
      state: { movieContentId: movieContentId },
    });
  };

  return (
    <div className="content-box" onClick={handleClick}>
      <div className="image">
        {imageUrl ? <img src={imageUrl} alt="Content" /> : <></>}
      </div>
      <div className="content">
        <h4>{maincontent}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Moviecontent;
