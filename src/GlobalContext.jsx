// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

// https://www.origamid.com/slide/react-completo/#/0305-usecontext/5

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  //precisa passar esse children para poder usar o GlobalContext como abertura e fechamento, e outros componentes dentro dele
  const [produtos, setProdutos] = useState([]);

  function handleClick() {
    setProdutos([]);
  }

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((res) => res.json())
      .then((resJson) => {
        setProdutos(resJson);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ produtos, setProdutos, handleClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
