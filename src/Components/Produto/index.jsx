import styles from "./Produto.module.scss";

const Produto = ({ nome, preco, descricao, fotos, usuario_id, vendido }) => {
  return (
    <div className={styles.divProdutos}>
      <div>
        <h3>{nome}</h3>
        <img alt={fotos[0].titulo} src={fotos[0].src} />
      </div>
      <ul>
        <li>Preço: R${preco}</li>
        <li>Descrição: {descricao}</li>
        <li>
          Dono do produto: <a href={`mailto: ${usuario_id} `}> {usuario_id} </a>
        </li>
        <li>
          Status:{" "}
          {vendido === "false" ? (
            <b>Produto em estoque!</b>
          ) : (
            "O produto foi vendido..."
          )}
        </li>
      </ul>
    </div>
  );
};

export default Produto;
