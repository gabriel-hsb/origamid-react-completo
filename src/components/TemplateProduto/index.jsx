import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";

import * as S from "./TemplateProduto.Styles";

const TemplateProduto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        // setError("Aconteceu um erro");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (isLoading) return <i>Carregando...</i>; // como o jsx vê um return, ele não renderiza nada abaixo dele.
  if (produto === null) return null; // se o produto for nulo (se o fetch der errado) não vai renderizar nada que tem abaixo
  return (
    <S.ProdutoContainer className="animeLeft">
      <Helmet>
        <title>Produtos | {produto.nome} </title>
      </Helmet>
      <S.ProdutoImg>
        <img src={produto.fotos[0].src}></img>
      </S.ProdutoImg>
      <S.ProdutoInfos>
        <h1> {produto.nome} </h1>
        <p className="preco"> R$ {produto.preco} </p>
        <p className="descricao"> {produto.descricao} </p>
      </S.ProdutoInfos>
    </S.ProdutoContainer>
  );
};

export default TemplateProduto;
