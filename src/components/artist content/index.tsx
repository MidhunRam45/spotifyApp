import "./artistcontent.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContex } from "../../context/global-context-provider";
// import { useUserContext } from "../../context/UserContext";

function ArtistContent({ artistcontent }: any) {
  const [artistDetails, setArtistDetails] = useState();
  const [artistID, setArtistID] = useState();

  const navigator = useNavigate();

  const { getIdOfSongs, getArtistbyId } = useGlobalContex();

  useEffect(() => {
    if (artistcontent) {
      getIdOfSongs({
        endpoint: "search",
        query: artistcontent,
        type: "artist",
      }).then((id: any) => {
        setArtistID(id);
        if (id) {
          getArtistbyId(id).then((value: any) => {
            setArtistDetails(value);
            console.log("art details :", value);
          });
        }
      });
    }
  }, [artistcontent]);

  // Conditional rendering of the image
  let imageUrl = "";
  if (
    artistDetails &&
    artistDetails.images &&
    artistDetails.images.length > 0
  ) {
    imageUrl = artistDetails.images[0].url;
  }

  const handleClick = () => {
    navigator("artist-songs", { state: { artistID: artistID } });
  };

  return (
    <div className="content-box" onClick={handleClick}>
      <div className="image">
        {imageUrl ? <img src={imageUrl} alt="Artist" /> : <img />}
      </div>
      <div className="content">
        <h4>{artistcontent}</h4>
        <p>Artist</p>
      </div>
    </div>
  );
}

export default ArtistContent;
