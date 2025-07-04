import PositionLeft from "../components/Position Left/PositionLeft";
import PositionCenter from "../components/Position Center/PositionCenter";
import PositionRight from "../components/Position Right/PositonRight";

import "./Layout.scss"

export default function Layout() {
  return(
    <div className="container">
      <PositionLeft />
      <PositionCenter />
      <PositionRight />
    </div>
  )
}