import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contato from "./components/Contato";
import Produtos from "./components/Produtos";
import TemplateProduto from "./components/TemplateProduto";

import { GlobalStorage } from "./GlobalContext";

import "./style.css";

const App = () => {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Usando o barra, Produtos torna-se o 'index.html' */}
            <Route path="/" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="produto/:id" element={<TemplateProduto />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;
