import logo1 from "./logo1.png";
import "./App.css";
import ListOfChar from "./components/ListOfCharacters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          <strong>Bienvenido a la API de Rick y Morty</strong>
        </p>
        <section className="Components">
          <ListOfChar />
        </section>
      </header>
    </div>
  );
}

export default App;
