import { Outlet } from "react-router-dom";
import SearchBar from "../../components/search bar";
import Navbar from "../../components/navbar";
import MusicPlayer from "../../components/music player";
import "./homepage.css";
import Movielist from "../../components/movie list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../utils/globals/global";
import { setAccessToken } from "../../core/redux/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: any) => state.auth.accessToken);

  // useEffect(() => {
  //   const hash = getAccessToken();
  //   const token = hash?.access_token;

  //   if (token) {
  //     dispatch(setAccessToken(token));
  //     // window.location.reload();
  //   }
  // }, []);
  useEffect(() => {
    const hash = getAccessToken();
    const token = hash?.access_token;

    // Check if a reload has already happened in this session
    const reloaded = sessionStorage.getItem("reloaded");

    if (token && token !== accessToken && !reloaded) {
      dispatch(setAccessToken(token));
      sessionStorage.setItem("reloaded", "true"); // Mark that reload has happened
      window.location.reload(); // Reload the page
    }
  }, [dispatch, accessToken]);

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
