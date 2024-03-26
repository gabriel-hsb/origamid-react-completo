import styles from "./Produtos.module.scss";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      <h1>Nossos produtos</h1>

      {produtos.map(({ nome, propriedades }) => (
        <div className={styles.lista} key={nome}>
          <h2> {nome} </h2>
          <ul>
            {propriedades.map((propriedade, index) => (
              <li key={index}> {propriedade} </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;
