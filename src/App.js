import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';


import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code fires when the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, 
        todo: doc.data().todo
      })
      ))
    })
  }, []);


  const addTodo = (e) => {
    e.preventDefault();
        // setTodos([
    //   ...todos, 
    //   input
    // ]);

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //clear input after clicking add todo
  }

  return (
    <div className="app">
      <h1>To Do  ...</h1>
      <div className="app__header">
        <FormControl>
          <InputLabel color="secondary">Write a Todo</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </div>

      <ul className="app__todoList">
        {todos.map(todo => (
          <Todo todo={todo}/>)
        )}
      </ul>
    </div>
  );
}

export default App;
