import React, { useState } from 'react';
import db from './firebase';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem , ListItemText, ListItemAvatar, Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './Todo.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000'
    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    return (
        <>
        <Modal 
            open={open}
            onClose={e => setOpen(false)}
        >
            <div>
                <h1>I am a modal</h1>
                <button onCLick={e => setOpen(false)}></button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <img src=""  alt=""/>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="deadline"/>
            </ListItem>
            <button onClick={e => setOpen(true)}></button>
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
