import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.listaNav}>
        <li>
          <a href="/Home">
            <button>Home</button>{" "}
          </a>
        </li>
        <li>
          <a href="/Produtos">
            <button>Produtos</button>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
