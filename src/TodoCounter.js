import React from "react";
import './css/todoCounter.css'

function TodoCounter({total, completed,}){

    return(
        <>
            <h2 className="title">Has completado {completed} de {total} tareas 📝</h2>
        </>  
    );
}

export { TodoCounter };