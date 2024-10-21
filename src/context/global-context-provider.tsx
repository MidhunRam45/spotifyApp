import { createContext, useContext } from "react";
import { getData } from "../services/api/api.service";

export const GlobalContext = createContext<any>("");

const GlobalContextProvider = ({ children }: any) => {
  const getIdOfSongs = async (data: object) => {
    try {
      const response = await getData(data?.endpoint, {
        q: data?.query,
        type: data?.type,
      });
      if (response) {
        if (data?.type == "playlist") {
          return response?.playlists?.items?.[0]?.id;
        } else if (data?.type == "artist") {
          return response?.artists?.items?.[0]?.id;
        }
      }
    } catch (error) {
      console.error("Error fetching playlist ID:", error);
    }
  };

  const getSongsById = async (songId: string) => {
    try {
      const response = await getData(`playlists/${songId}/tracks`);
      return response;
    } catch (error) {}
  };

  return (
    <GlobalContext.Provider value={{ getIdOfSongs, getSongsById }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const useGlobalContex = () => useContext(GlobalContext);
