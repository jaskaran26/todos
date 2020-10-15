import React, {useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import StarBorder from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = (props) => {
    const {todos, addTodo} = useContext(TodoContext);
    const handleDelete = (deleteID) => {
        let newArr = todos.filter(function(todo){
            return deleteID != todo.id;
        });
        addTodo(newArr);
        localStorage.setItem('todos', JSON.stringify(newArr));
    }
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary={props.todoitem.item} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={(e) => handleDelete(props.todoitem.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </>
    );
}

export default TodoItem
