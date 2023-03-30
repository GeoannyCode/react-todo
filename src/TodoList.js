import React from "react";
import './css/todoList.css';

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }