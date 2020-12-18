import React from "react";

/* function Greet() {
    return <h1>Say farting A LOT!</h1>
} */

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            < h1 > Say farting {props.name} {props.assName}</h1 >
            {props.children}
    </div>
    )
};

export default Greet;
