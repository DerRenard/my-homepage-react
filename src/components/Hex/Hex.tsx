import "./Hex.scss";

interface Hex {
  image: string;
  link: string;
}

export default function Hex({ image, link="#" }: Hex) {
  return <a href={link} className="hex">
    <img src={image} alt="link" />
  </a>;
}
