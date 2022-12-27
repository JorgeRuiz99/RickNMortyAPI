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
        <h3>Name: {name}</h3>
        <small>Last location: {locationName}</small>
        <br />
        <img alt="" src={image} />
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default Characters;
