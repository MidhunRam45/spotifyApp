import ArtistContent from "../artist content";
import WishBox from "../wish box";
import "./artistlist.css";

function ArtistList() {
  return (
    <div className="artistlist-container">
      <WishBox />
      <ArtistContent artistcontent={"Anirudh Ravichandher"} />
      <ArtistContent artistcontent={"Yuvan Shankar Raja"} />
      <ArtistContent artistcontent={"G.V.Prakash Kumar"} />
      <ArtistContent artistcontent={"A.R.Rahman"} />
      <ArtistContent artistcontent={"Harris Jayaraj"} />
    </div>
  );
}

export default ArtistList;
