import style from "./styles/navbar-style.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style["navbar-logo"]}>
        <img src="https://www.svgrepo.com/show/505213/pizza.svg" alt="Pizza logo" />
        <span>City Pizza</span>
      </div>
      <ul className={style["navbar-links"]}>
        <li>
          <Link className={style["link-styles"]} to="/">Home</Link>
        </li>
        <li>
          <Link className={style["link-styles"]} to="/Owner">Owner</Link>
        </li>
      </ul>
    </nav>
  );
}
