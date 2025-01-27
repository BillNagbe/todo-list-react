import React from "react";


function Buttons(props) {
    return (
        <button onClick={props.handleFunction} id={props.id}>
            {props.name}
        </button>
    )
}


export default Buttons;