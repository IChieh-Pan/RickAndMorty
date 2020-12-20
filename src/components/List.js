import React, { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1");
    const data = await response.json();
    // const item = data.results;
    console.log("data :>> ", data);

    const item = Object.values(data);
    console.log("item :>> ", item);
    const characters = item[1];
    console.log("characters :>> ", characters);
    setCharacters(characters);
  };


  return (
    <div>
      <ul className="grid">
       {characters && characters.map((characters) => {
          const { id, name , image} = characters;
          return (
            <li key={id} className="card">
              <a href="#">
                <img src={image} alt={`${name} Picture`} /> 
                <h3>{name}</h3>
              </a>
            </li>
          );
        })}
      </ul>

      {/* {data.map((data) => console.log(data))} */}
      {/*        characters.map((item, index) => {
           return (<ul>
                <li></li> */}
    </div>
  );
  
}
export default List;
