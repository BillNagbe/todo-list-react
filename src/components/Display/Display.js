import React from "react";
import Buttons from "../Buttons/Buttons";

let innerText;

const toDoListContainerStyle = {
    border: "1px solid",
    borderRadius: "10px",
    width: "70vw",
    height: "50vh",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "2px 2px 2px #333333"
}

const upperBtnStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
}

const editBtnStyle = {
    padding: "0.625rem",
    backgroundColor: "#2133ef",
    border: "none",
    color: "#fff",
    borderRadius: "10px",
}

const deleteBtnStyle = {
    padding: "0.625rem",
    backgroundColor: "#ef3321",
    border: "none",
    color: "#fff",
    borderRadius: "10px",
}

const mainStyle = {
    flexGrow: "1",
    border: "1px solid #33333333",
    width: "100%",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 2px 2px #333333"
}

const lowerBtnStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
}

const addBtnStyle = {
    padding: "0.625rem",
    backgroundColor: "#33ef21",
    border: "none",
    color: "#fff",
    borderRadius: "10px",
}

function Display(props) {
    return (
        <div className="to-do-list-container" style={toDoListContainerStyle}>
            <h1>To Do List</h1>
            <section className="upper-btn-container" style={upperBtnStyle}>
            <Buttons name="edit" id="edit" style={editBtnStyle}  />
            <Buttons name="delete" id="delete" style={deleteBtnStyle}  />
            </section>
            <main className="list-contaier" style={mainStyle}>
                <div className="inner-list">
                    <ul>
                        {innerText}
                    </ul>
                </div>
            </main>
            <section className="lower-btn-container"style={lowerBtnStyle}>
                <input type="text" className="to-do" id="to-do" />
                <Buttons name="add" id="edit" style={addBtnStyle} />
            </section>
        </div>
    ) 
}

export default Display;