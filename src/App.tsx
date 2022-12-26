import React, { useEffect, useState } from "react";
import logo1 from "./logo1.png";
import "./App.css";
import getChar from "./services/getCharacters";
import Characters from "./components/Characters";

function App() {
  const [char, setChar] = useState<any[]>([]);
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
        <section>
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
