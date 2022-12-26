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
      <h3>Name: {name}</h3>
      <img alt="" src={image} />
      <p>
        Last location: {locationName}
        <br />
        Status: {status}
      </p>
    </div>
  );
};

export default Characters;
