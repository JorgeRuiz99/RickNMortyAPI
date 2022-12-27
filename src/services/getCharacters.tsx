function getCharacters(apiURL: string) {
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response;
      const char = results.map(
        (info: {
          id: number;
          location: any;
          image: any;
          name: any;
          status: any;
        }) => {
          const { id, location, image, name, status } = info;
          const locationName = location.name;
          return { id, image, name, locationName, status };
        }
      );
      return char;
    });
}

export default getCharacters;
