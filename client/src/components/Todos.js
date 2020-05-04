import React from 'react';
import Todo from "./Todo";

export default function Todos(props) {
    return (
        <div>
            {props.todos.map(item=><Todo deleteTodo={props.deleteTodo} todo={item} />)}
        </div>
    )
}
