import React from "react";
import './css/todoSearch.css';
import { TodoContext } from "./todoContext";

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
            <input 
            className="TodoSearch" 
            placeholder="¿Qué estás buscando?"
            value={searchValue}
            onChange={onSearchValueChange}
            />
    )
}

export { TodoSearch }