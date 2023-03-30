import React from "react";
import './css/todoSearch.css';


function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
            <input 
            className="TodoSearch" 
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}
            />
    )
}

export { TodoSearch }