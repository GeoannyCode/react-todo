import React from "react";
import './css/skeleton.css'

function TodosLoading(){
    return(
        <>
        <li className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando...</p>
        </li>
        <li className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando...</p>
        </li>
        <li className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando...</p>
        </li>
        <li className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando...</p>
        </li>
        <li className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando...</p>
        </li>
        </>    
    )
}

function TodosError({ error }){
    <li className="EmptyTodo-container">
            <p className="EmptyTodo-text">🚫 Lo siento, no se pudieron cargar las tareas.</p>
            <p>{ error }</p>
        </li>
}

function EmptyTodos(){
    return (
        <li className="EmptyTodo-container">
            <p className="EmptyTodo-text">Agrega una tarea para empezar 🚀 </p>
        </li>
    )
}

export {TodosLoading, TodosError, EmptyTodos}