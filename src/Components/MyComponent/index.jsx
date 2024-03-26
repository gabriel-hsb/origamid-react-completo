import { useContext } from "react";

import "./MyComponent.scss";

import { GlobalContext } from "../../GlobalContext";
import Button from "../Button";

const MyComponent = () => {
  const global = useContext(GlobalContext);

  return (
    <>
      <h1>Produtos Ranek</h1>

      <Button handleClick={global.handleClick} btnInner={"Limpar dados"} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "2rem",
        }}
      >
        {global.produtos.map(({ id, nome, preco, descricao }) => (
          <ul
            style={{
              marginBlock: "1.5rem",
              backgroundColor: "#caf",
              padding: "2rem",
              borderRadius: "8px",
            }}
            key={id}
          >
            <li>
              {" "}
              <b>Nome do produto:</b> {nome}{" "}
            </li>

            <li>
              <b>Preço do produto: </b> R${preco}{" "}
            </li>
            <li>
              <b>Descrição do produto: </b> {descricao}{" "}
            </li>
            <li>
              <b>Id do produto:</b> {id}{" "}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default MyComponent;
