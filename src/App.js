import React from "react";
import { TodoContext } from "./todoContext/";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

import { TodoProvider } from "./todoContext/";

import './css/app.css';

//  const defaultTodos = [
//     {id:1, text: 'Cortar cebolla', completed: true },
//     {id:2, text: 'Tomar el cursso de intro a React', completed: false },
//     {id:3, text: 'Llorar con la llorona', completed: true },
//     {id:4, text: 'LALALALAA', completed: false },
//  ];


export default function App() {
  return (
    <>
    <TodoProvider>
      
    <TodoCounter/>
    <TodoSearch/>

    <TodoContext.Consumer>
      {({error,loading,searchedTodos,completeTodo,deleteTodo}) => (
        <TodoList>
          {error && <p className="msj">Desespérate, hubo un error...</p>}
          {loading && <p className="msj">Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p className="msj">¡Crea tu primer TODO!</p>}

          {searchedTodos.map( todo =>(
            <TodoItem 
              key={todo.id} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>
      )}
    </TodoContext.Consumer>
  
    <CreateTodoButton/> 
    </TodoProvider>
    </>
  );
}
