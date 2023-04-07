import React from "react";
import { TodoContext } from "./todoContext/";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Modal } from "./Modal"

import './css/app.css';
import { TodoForm } from "./TodoForm";

import { TodosLoading, TodosError, EmptyTodos } from "./TodosLoadingSkelentons";

//  const defaultTodos = [
//     {id:1, text: 'Cortar cebolla', completed: true },
//     {id:2, text: 'Tomar el cursso de intro a React', completed: false },
//     {id:3, text: 'Llorar con la llorona', completed: true },
//     {id:4, text: 'LALALALAA', completed: false },
//  ];


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>        

        <TodoList>
          {error && <TodosError error={error}/> }
          {loading && <TodosLoading/> }
          {(!loading && !searchedTodos.length) && <EmptyTodos/>}

          {searchedTodos.map( todo =>(
            <TodoItem 
              key={todo.id} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
          {
            !!openModal && (
              <Modal>
                <TodoForm></TodoForm>
              </Modal>
            )
          }
          <CreateTodoButton 
          setOpenModal = {setOpenModal}
          openModal = {openModal}
          />
        </TodoList>
    </>
  );
}

export { AppUI }