import "../App.css";

const Paginaton = ({
  charPerPage,
  totalChar,
  paginate,
}: {
  charPerPage: number;
  totalChar: number;
  paginate: (pageNumber: number) => void;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChar / charPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="/#"
              className="pagination"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginaton;
