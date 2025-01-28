import React from "react";


function Buttons(props) {
    return (
        <button onClick={props.handleFunction} id={props.id} style={props.style}>
            {props.name}
        </button>
    )
}


export default Buttons;