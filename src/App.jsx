// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
import "./style.css";

const App = () => {
  function handleClick(e) {
    alert(`Você comprou ${e.target.innerText}`);
  }
  function handleHover() {
    alert("Você passou o mouse! ");
  }
  return (
    <>
      <h1>
        <a
          target="_blank"
          href="https://www.origamid.com/slide/react-completo/#/0209-eventos/1"
        >
          Slide 0209 ↗
        </a>
      </h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <button onClick={handleClick}>Camiseta</button>
        <button onClick={({ target }) => target.classList.toggle("perigo")}>
          Muda de cor
        </button>
        <button onMouseMove={handleHover}>Hover me</button>
      </div>
    </>
  );
};

export default App;
