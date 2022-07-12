import { Icon } from "components/media";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="item home">
        <a className="link" href="#">
          <Icon variant="icon">feed</Icon>
          <h6 className="title">Home</h6>
        </a>
      </li>
      <li className="item stats">
        <a className="link" href="#">
          <Icon variant="icon">stats</Icon>
          <h6 className="title">Stats</h6>
        </a>
      </li>
      <li className="item settings">
        <a className="link" href="#">
          <Icon variant="icon">settings</Icon>
          <h6 className="title">Settings</h6>
        </a>
      </li>
      <li className="item add">
        <a className="link" href="#">
          <Icon variant="icon">add</Icon>
          <h6 className="title active">Add</h6>
        </a>
      </li>
    </ul>
  );
};
