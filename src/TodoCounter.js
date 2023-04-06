import React from "react";
import './css/todoCounter.css'
import { TodoContext } from "./todoContext";

function TodoCounter(){
    const {
        totalTodos: total,
        completedTodos: completed,
    } = React.useContext(TodoContext)

    return(
        <>
            <h2 className="title">Has completado {completed} de {total} tareas 📝</h2>
        </>  
    );
}

export { TodoCounter };