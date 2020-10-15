import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { TodoContext } from '../contexts/TodoContext';
import Alert from '@material-ui/lab/Alert'; 


const TodoForm = (props) => {
    const {todos, addTodo} = useContext(TodoContext);
    const [open, setOpen] = useState(false);
    const [todo,setTodo] = useState('');
    const [fieldError,setFieldError] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const changeHandler = (e) => {
        setTodo(e.target.value);
    }
    const submitHandler = () => {
        if(todo != ''){
            addTodo(
                [...todos, {id: Math.floor((Math.random() * 999) + 1), item: todo}]
            );
            const saveTodos = [...todos, {id: Math.floor((Math.random() * 999) + 1), item: todo}];
            localStorage.setItem('todos', JSON.stringify(saveTodos));
            setTodo('');
            setFieldError(false);
        }else{
            setFieldError(true);
        }
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Add new</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle>ADD TODO</DialogTitle>
                <DialogContent>
                    {fieldError ? <Alert style={{marginBottom: '10px'}} severity="error">Please add todo name</Alert> : null}
                    <TextField label="Name" type="text" variant="outlined" value={todo} onChange={changeHandler} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={submitHandler} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TodoForm
