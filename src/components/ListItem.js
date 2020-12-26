import React, {useState} from 'react'

function ListItem(props) {
   
    const styledDiv = {
        backgroundColor: 'lightBlue',
        fontSize: 22,
        // font-family: Roboto
   }
    
    return (
      <div style={styledDiv}>
        <li key={props.id} className="card">
          <a href="#">
            <img src={props.imagttt} alt={`${props.name} Picture`} />
            <h3>{props.name}</h3>
          </a>
        </li>
      </div>
    );
}

 
export default ListItem
