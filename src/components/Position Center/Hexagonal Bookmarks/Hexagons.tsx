import HexFirstRow from "../../../data/hexagonalLinksFirst.json";
import HexSecondRow from "../../../data/hexagonalLinksSecond.json";
import Hex from "../../Hex/Hex";
import "./Hexagon.scss"

export default function Hexagons() {
  return (
    <div className="hexagonalBookmarks">
      <div className="firstRow">
        {HexFirstRow.map((el, ind) => (
          <Hex image={el.imagePath} link={el.link} key={ind + el.imagePath} />
        ))}
      </div>
      <div className="secondRow">
        {HexSecondRow.map((el, ind) => (
          <Hex image={el.imagePath} link={el.link} key={ind + el.imagePath} />
        ))}
      </div>
    </div>
  );
}
