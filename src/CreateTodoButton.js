import React from "react";
import './css/createTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Click Button")}
        >
            +
        </button>
    )
}

export { CreateTodoButton }