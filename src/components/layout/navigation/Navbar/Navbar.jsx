import { Icon } from "components/media";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="item home">
        <Link className="link" to="/">
          <Icon variant="icon">feed</Icon>
        </Link>
      </li>
      <li className="item stats">
        <Link className="link" to="stats">
          <Icon variant="icon">stats</Icon>
        </Link>
      </li>
      <li className="item settings">
        <Link className="link" to="settings">
          <Icon variant="icon">settings</Icon>
        </Link>
      </li>
      <li className="item add">
        <Link className="link" to="add">
          <Icon variant="icon">add</Icon>
        </Link>
      </li>
    </ul>
  );
};
