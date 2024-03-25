// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
import "./style.css";

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  return (
    <>
      <h1>
        <a
          target="_blank"
          href="https://www.origamid.com/slide/react-completo/#/0208-jsx-arrays/5"
        >
          Slide 0208 ↗
        </a>
      </h1>
      {produtos
        .filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
        .map(
          (
            { id, nome, preco, cores } // Seria o mesmo que .map((produto)), porém iria repetir produto toda vez que fosse chamar o id, nome preco...
          ) => (
            <div key={id}>
              <h2>Produto: {nome}</h2>
              <div>Preço: R$ {Number(preco.replace("R$ ", ""))}</div>
              <ul>
                {cores.map((cor) => (
                  <li
                    key={cor}
                    style={{
                      backgroundColor: cor,
                      padding: ".5em",
                      color: "#fff",
                    }}
                  >
                    Cor de background: {cor.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
    </>
  );
};

export default App;
