import logo1 from "./logo1.png";
import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import getCharacters from "./services/getCharacters";
import Pagination from "./components/Pagination";

function App() {
  const [char, setChar] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charPerPage, setCharPerPage] = useState(9);

  const indexOfLastChar = currentPage * charPerPage;
  const indexOfFirstChar = indexOfLastChar - charPerPage;
  const currentCharacters = char.slice(indexOfFirstChar, indexOfLastChar);

  const apiURL = "https://rickandmortyapi.com/api/character?page=1";

  useEffect(() => {
    getCharacters(apiURL).then((char) => setChar(char));
  }, [apiURL]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          <strong>Bienvenido a la API de Rick y Morty</strong>
        </p>
        <section className="Grid">
          {currentCharacters.map(
            ({ id, name, image, locationName, status }) => (
              <Characters
                key={id}
                name={name}
                image={image}
                locationName={locationName}
                status={status}
              />
            )
          )}
        </section>
        <div className="pagination">
          <Pagination
            charPerPage={charPerPage}
            totalChar={char.length}
            paginate={paginate}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
