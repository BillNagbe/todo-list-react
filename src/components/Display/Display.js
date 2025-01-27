import React from "react";
import Buttons from "../Buttons/Buttons";

const innerText = <li></li>;



function handleEdit() {
    innerText.innerHTML = <li>{document.getElementById("to-do").value}</li>;
}

function handleDelete() {
    innerText.removeChild(innerText.firstChild());
}

function handleApp() {
    const val = document.getElementById("to-do");
    innerText.push(val);

}

function Display(props) {
    return (
        <div className="to-do-list-container">
            <Buttons name="Edit" id="edit" handleFunction={handleEdit} />
            <Buttons name="delete" id="delete" handleFunction={handleDelete} />
            <main className="list-contaier">
                <div className="inner-list">
                    <ul>
                        {innerText}
                    </ul>
                </div>
                <input type="text" className="to-do" id="to-do" />
                <Buttons name="Add" id="edit" />
            </main>
        </div>
    ) 
}

export default Display;