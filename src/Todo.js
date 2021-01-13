import React, { useState } from 'react';
import db from './firebase';

import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem , ListItemText, ListItemAvatar, Modal, Button, IconButton} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './Todo.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        // update toto with the new input text

        db.collection('todos').doc(props.todo.id).set({
            todo:input
        }, { merge: true })
        setOpen( false );
    }

    return (
        <>
        <Modal 
            className={classes.modal}
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h2>Edit me</h2>
                <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>

        <List className="list">
            <ListItem>
                <ListItemAvatar>
                    <img src=""  alt=""/>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="deadline"/>
            </ListItem>
            <IconButton onClick={e => setOpen(true)}>
                <EditIcon />
            </IconButton>
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>

        </>
    )
}

export default Todo
