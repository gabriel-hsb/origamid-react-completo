import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import { Card, CardsContainer } from "./Produtos.Styles";

const Produtos = () => {
  const global = useContext(GlobalContext);

  return (
    <section className="animeLeft">
      <Helmet>
        <title>Produtos </title>
      </Helmet>
      <h1>Nossos produtos</h1>
      <CardsContainer>
        {global.produtosRes.length > 0 ? (
          global.produtosRes.map((produto) => {
            return (
              <Card key={produto.id}>
                <Link to={`/produto/${produto.id}`}>
                  <img src={produto.fotos[0].src} />
                  <h2> {produto.nome} </h2>
                </Link>
              </Card>
            );
          })
        ) : (
          <b>Carregando...</b>
        )}
      </CardsContainer>
    </section>
  );
};

export default Produtos;
