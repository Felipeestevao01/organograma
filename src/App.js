import Banner from "./components/Banner/Index.js";
import CampoTexto from "./components/CampoTexto/Index.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" />
      <CampoTexto label="Cargo" />
      <CampoTexto label="Imagem" />
    </div>
  );
}

export default App;
