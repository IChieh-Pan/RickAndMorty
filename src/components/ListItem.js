import React from 'react'

function ListItem(characters) {
    const styleDiv = {
        backgroundColor: 'grey',
        fontSize: 14
}


    return (
      <div style={styleDiv} key={characters.id}>
        <li className="card">
          <a href="#">
            <img src={image} alt={`${name} Picture`} />
            <h3>{name}</h3>
          </a>
        </li>
      </div>
    );
}

export default ListItem
