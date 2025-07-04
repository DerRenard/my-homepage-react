import googleData from "../../data/googleLinks.json";
import "./PositionRight.scss"

export default function PositionRight() {
  return (
    <div className="position-right">
      <a href="https://myaccount.google.com/">
        <img src="ash.jpg" alt="ava" id="avatar" />
      </a>
      {googleData.map((el, ind) => (
        <a href={el.link} key={ind} className="googleLinks">
          <img
            src={el.imagePath}
            alt={el.imagePath + ind}
            className="googleLinksImages"
          />
        </a>
      ))}
    </div>
  );
}
