// import "./rightBarArea.css"

import Playlist from "../../playlist";
import ArtistList from "../artist list";

// import RightBarContent from "../rightBarContent/RightBarContent";
// import Row from "../row/Row";

function PlaylistsList() {
  return (
    <div>
      <ArtistList />
      <Playlist title={"Tamil Trending"} />
      <Playlist title={"2024 Kuthu songs"} />
      <Playlist title={"2024 Romantic"} />
      <Playlist title={"Kollywood corner"} />
      <Playlist title={"India's Best"} />
    </div>
  );
}

export default PlaylistsList;
