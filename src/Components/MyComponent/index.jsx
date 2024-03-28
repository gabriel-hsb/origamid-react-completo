// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

// const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

import { useState } from "react";

import "./MyComponent.scss";

const MyComponent = () => {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  const [cores, setCores] = useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <form>
        {coresArray.map((item) => { //para cada item no array coresArray...
          return (
            <label key={item} htmlFor={item}>
              <input
                type="checkbox"
                value={item}
                checked={handleChecked(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          );
        })}
      </form>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </>
  );
};

export default MyComponent;
