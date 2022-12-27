import "../App.css";

const Characters = ({
  name,
  image,
  locationName,
  status,
}: {
  name: string;
  image: string;
  locationName: string;
  status: string;
}) => {
  return (
    <div className="Box">
      <div className="BoxContent">
        <p>Last location: {locationName}</p>
        <p>Status: {status}</p>
        <br />
        <img alt="" src={image} />
        <h3>Name: {name}</h3>
      </div>
    </div>
  );
};

export default Characters;
