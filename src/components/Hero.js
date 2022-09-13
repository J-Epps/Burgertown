import "../css/hero.css";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <div className="hero-div">
      <div className="title-and-quote">
        <h1>Burgertown</h1>
        <p>
          <em>"The Best Burgers in Town!"</em>
        </p>
        <Link to="/Menu">
          <button className="home-page-shop-button">Order Now</button>
        </Link>
      </div>
    </div>
  );
}
