import { Outlet } from "react-router-dom";
import SearchBar from "../../components/search bar";
import Navbar from "../../components/navbar";
import MusicPlayer from "../../components/music player";
import "./homepage.css";
import Movielist from "../../components/movie list";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/globals/global";

const HomePage = () => {
  const [AccessToken, setAccessToken] = useState();
  useEffect(() => {
    const hash = getAccessToken();
    // window.location.hash = "";
    const _token = hash.access_token;
    _token && setAccessToken(_token);
    sessionStorage.setItem("access_token", `${_token}`);
  }, []);
  AccessToken && console.log(AccessToken);

  return (
    <div className="parentpage-container">
      <div className="left-bar">
        <SearchBar />
        <Movielist />
      </div>
      <div className="right-bar">
        <Navbar />
        <div className="rightBarArea">
          <Outlet />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
