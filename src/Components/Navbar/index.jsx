import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.listaNav}>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Produtos</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
