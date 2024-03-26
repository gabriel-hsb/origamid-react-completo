// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import MyComponent from "./components/MyComponent";
import { GlobalStorage } from "./GlobalContext";

import "./style.scss";

const App = () => {
  return (
    <>
      <h1>
        <a
          target="_blank"
          href="https://www.origamid.com/slide/react-completo/#/0305-usecontext/6"
        >
          Exercício useContext | Slide 0305 ↗
        </a>
      </h1>

      <GlobalStorage>
        <MyComponent  />
      </GlobalStorage>
    </>
  );
};

export default App;
