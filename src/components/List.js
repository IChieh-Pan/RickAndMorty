import React, { useState, useEffect } from "react";
import ListItem from "./ListItem"

function List() {
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=2");
    const data = await response.json();
    // const item = data.results;
    console.log("data :>> ", data);

    const item = Object.values(data);
    console.log("item :>> ", item);
    const characters = item[1];
    console.log("characters :>> ", characters);
    setCharacters(characters);
  }


  return (
    <div>
      <ul>
        {characters && characters.map((characters) => {
          const { id, name, image } = characters;
          return (
            <ListItem key={characters.id} imagttt={characters.image} name={characters.name} />)
        })}
      </ul>
    </div>
  );
  
}
export default List;
