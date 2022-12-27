import React, { useEffect, useState } from "react";
import getChar from "../services/getCharacters";

import Characters from "./Characters";

export default function ListOfChar() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    getChar().then((char) => setChar(char));
  }, []);
  return char.map(
    ({
      id,
      name,
      image,
      locationName,
      status,
    }: {
      id: number;
      name: string;
      image: string;
      locationName: string;
      status: string;
    }) => (
      <Characters
        key={id}
        name={name}
        image={image}
        locationName={locationName}
        status={status}
      />
    )
  );
}
