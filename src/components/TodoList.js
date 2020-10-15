import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import TodoItem from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const listSubHeader = <ListSubheader component="div" id="nested-list-subheader">TODO List</ListSubheader>;
    return (
        <div>
            <List component="nav" aria-label="Todo list" subheader={listSubHeader}>
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todoitem={todo} />;
                })}
            </List>
        </div>
    );
}

export default TodoList
