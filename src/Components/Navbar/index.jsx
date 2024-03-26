import styles from "./Navbar.module.scss";

import Button from "../Button";

const Navbar = ({ handleClick }) => {
  return (
    <ul className={styles.navBar}>
      <li>
        {" "}
        <Button handleClick={handleClick} btnInner={"Tablet"} />{" "}
      </li>
      <li>
        {" "}
        <Button handleClick={handleClick} btnInner={"Smartphone"} />{" "}
      </li>
      <li>
        {" "}
        <Button handleClick={handleClick} btnInner={"Notebook"} />{" "}
      </li>
    </ul>
  );
};

export default Navbar;
