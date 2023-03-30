import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

// const defaultTodos = [
//    {id:1, text: 'Cortar cebolla', completed: true },
//    {id:2, text: 'Tomar el cursso de intro a React', completed: false },
//    {id:3, text: 'Llorar con la llorona', completed: true },
//    {id:4, text: 'LALALALAA', completed: false },
// ];


function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifieldItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifieldItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ]
}

export default function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    if(newTodos[todoIndex].completed === true){
      newTodos[todoIndex].completed = false;
    }else{
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
    <TodoCounter
      total = {totalTodos}
      completed = {completedTodos}
    />

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    
    <TodoList>

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

    <CreateTodoButton/> 
  </>
  );
}
