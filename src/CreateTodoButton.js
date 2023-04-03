import React from "react";
import './css/createTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
            props.setOpenModal(props.openModal? false : true)
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }