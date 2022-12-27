import logo1 from "./logo1.png";
import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import getChar from "./services/getCharacters";

function App() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    getChar().then((char) => setChar(char));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          <strong>Bienvenido a la API de Rick y Morty</strong>
        </p>
        <section className="Grid">
          {char.map(({ id, name, image, locationName, status }) => (
            <Characters
              key={id}
              name={name}
              image={image}
              locationName={locationName}
              status={status}
            />
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
