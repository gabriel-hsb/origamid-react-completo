// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Produtos from "./Components/Produtos";
import "./style.scss";

const urlAtual = window.location.pathname;

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
      {urlAtual === "/Home" ? <Home /> : <Produtos />}
    </>
  );
};

//Professor disse que essa não é a melhor forma de
//fazer a mudança de URL. O react possui alternativa melhor
// que será apresentada futuramente.

export default App;
