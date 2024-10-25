import "./row.css";
import SongCart from "../components/song cart";
import { useEffect, useState } from "react";
import { useGlobalContex } from "../context/global-context-provider";

const Playlist = ({ title }: any) => {
  const [endIndex, setEndIndex] = useState(4);
  const [showAll, setShowAll] = useState("show all");

  const [songs, setSongs] = useState(null);

  const { getIdOfSongs, getSongsByHeadingId } = useGlobalContex();

  useEffect(() => {
    getIdOfSongs({ endpoint: "search", query: title, type: "playlist" }).then(
      (songId: string) => {
        if (songId) {
          getSongsByHeadingId(songId).then((songs: any) =>
            setSongs(songs?.items)
          );
        }
      }
    );
  }, [title]);

  //   const [favData, setFavData] = useState();
  //   useEffect(() => {
  //     getUserFavoriteSongs().then((data) => setFavData(data));
  //   }, []);

  return (
    <div className="row">
      <div className="row-heading-container">
        <h1>{title}</h1>
        <button
          onClick={() =>
            endIndex === 4
              ? (setEndIndex(20), setShowAll("Minimize"))
              : (setEndIndex(4), setShowAll("Show all"))
          }
        >
          {showAll}
        </button>
      </div>

      <div className="row-song-container">
        {songs?.slice(0, endIndex).map((data, index) => (
          <SongCart
            key={index}
            heading={
              data.track.name.length > 23
                ? data.track.name.substring(0, 23) + "..."
                : data.track.name
            }
            description={
              data.track.artists[0].name.length > 35
                ? data.track.artists[0].name.substring(0, 35) + "..."
                : data.track.artists[0].name
            }
            imagesrc={data.track.album.images[0].url}
            id={data.track.id}
            uriToPlay={data?.track?.uri}
            favData={favData}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
