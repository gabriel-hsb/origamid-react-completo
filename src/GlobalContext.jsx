import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [produtosRes, setProdutosRes] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((resJson) => setProdutosRes(resJson));
  }, []);

  return (
    <GlobalContext.Provider value={{ produtosRes }}>
      {children}
    </GlobalContext.Provider>
  );
};
