import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contato from "./components/Contato";
import Produtos from "./components/Produtos";
import TemplateProduto from "./components/TemplateProduto";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

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
            <Route path="sobre" element={<Sobre />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;
