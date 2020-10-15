import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    let initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    const [todos, setTodo] = useState(initialTodos);
    return (
        <TodoContext.Provider value={{ todos: todos, addTodo: setTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider
