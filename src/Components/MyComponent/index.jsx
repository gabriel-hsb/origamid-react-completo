// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from "react";

import "./MyComponent.scss";

import Navbar from "../Navbar";
import Produto from "../Produto";

const MyComponent = () => {
  const [isCarregando, setIsCarregando] = useState(true);
  const [produto, setProduto] = useState([]); //iniciando com uma array vazia

  async function handleClick(e) {
    setIsCarregando(true); // Defina o estado de carregamento como verdadeiro
    const nomeProduto = e.target.innerText.toLowerCase();

    // Aguarde 2 segundos usando setTimeout
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Continue com a lógica de busca do produto após o atraso
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`
    );
    const data = await res.json();
    setIsCarregando(false);
    setProduto(data);
  }

  return (
    <>
      <h1>Produtos Ranek</h1>
      <h2>Puxados utilizando a API da Origamid - Ranek</h2>

      <Navbar handleClick={handleClick} />

      {isCarregando ? (
        <b>Carregando... </b>
      ) : (
        <Produto
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          fotos={produto.fotos}
          usuario_id={produto.usuario_id}
          vendido={produto.vendido}
        />
      )}
    </>
  );
};

export default MyComponent;
