import React from 'react'

export default function Todo(props) {
    const handleDelete = ()=>{
        props.deleteTodo(props.todo._id);
    }
    return (
        <h2>{props.todo.title} <button onClick={handleDelete}>Delete</button></h2>
    )
}
