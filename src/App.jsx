// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import "./style.css";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  // * Mudar dados que são mostrados
  const dados = luana;

  const precos = dados.compras.map((compra) => {
    return parseInt(compra.preco.replace("R$ ", "")); //tira o cifrão para poder transformar em parseInt
  });

  const totalPrecos = precos.reduce((totalAtual, preco) => {
    return preco + totalAtual;
  }, 0);

  return (
    <>
      <h1>Dados do cliente</h1>
      <ul>
        <li>
          Nome: <b>{dados.cliente}</b>
        </li>
        <li>
          Idade: <b> {dados.idade}</b>
        </li>
        <li>
          Situação:
          <b className={dados.ativa ? "sucesso" : "perigo"}>
            {dados.ativa ? "Conta ativa!" : "Conta desativada!"}
          </b>
        </li>
        <li>
          Total gasto:
          <b className={totalPrecos >= 10000 ? "perigo" : "sucesso"}>
            {totalPrecos}
          </b>
        </li>
      </ul>
      <b className="perigo">
        {" "}
        {totalPrecos >= 10000 && "Gasto excedido. Conta desativada!"}{" "}
      </b>

      <h4>Suas compras foram:</h4>
      <ul>
        {dados.compras.map(({ nome, preco }) => (
          <li key={nome}>
            Item: {nome}. Valor: {preco}
          </li>
        ))}
      </ul>

      <i>Para mudar os valores exibidos, altere a linha 33</i>
    </>
  );
};

export default App;
