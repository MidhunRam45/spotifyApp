import Moviecontent from "../movie content";
import WishBox from "../wish box";
import "./movielist.css";

function Movielist() {
  return (
    <div className="songheadingcontainer">
      <WishBox />
      <Moviecontent maincontent={"Animal"} />
      <Moviecontent maincontent={"Latest Telugu Hits"} />
      <Moviecontent maincontent={"K.G.F - Chapter 1"} />
      <Moviecontent maincontent={"Pushpa - The Rise"} />
      <Moviecontent maincontent={"Leo(Tamil)"} />
    </div>
  );
}

export default Movielist;
