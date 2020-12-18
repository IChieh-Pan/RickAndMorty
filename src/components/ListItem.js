import React from 'react'

const ListItem = ({ item }) => {
    const styleDiv = {
        backgroundColor: 'grey',
        fontsize: 14 
    }

    return (
        <div style={styleDiv} key={item.id}>
            <h2>
                {item.name}
            </h2>
            {item.species && <p>item.species</p>}
            
        </div>
    )
}

export default ListItem
