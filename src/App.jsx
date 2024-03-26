// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Produtos from "./Components/Produtos";
import "./style.scss";

const App = () => {
  return (
    <>
      <h1>
        <a
          target="_blank"
          href="https://www.origamid.com/slide/react-completo/#/0212-desafio-componentes/1"
        >
          Exercício | Slide 0212 ↗
        </a>
      </h1>
      <Navbar />
      <Home />
      <Produtos />
    </>
  );
};

export default App;
