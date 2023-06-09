import React from "react";

function useLocalStorage(itemName, initialValue){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
        }catch(error){
          setError(error);
        }finally{
          setLoading(false);
        }
      }, 2000);
    });
  
    const saveItem = (newItem) => {
      try{
        const stringifieldItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifieldItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

export {useLocalStorage};