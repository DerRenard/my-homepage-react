
import Clock from "./Clock/Clock";
import Hexagons from "./Hexagonal Bookmarks/Hexagons";

import "./PositionCenter.scss";
import Search from "./Search/Search";

export default function PositionCenter() {

  return (
    <div className="position-center">
      <Clock />
      <Search />
      <Hexagons />
    </div>
  );
}
