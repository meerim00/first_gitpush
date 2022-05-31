import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggleDone }) => {

  const elements = todos.map(({id,  ...others }) => {

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...others }  
        onDelete={() => onDelete(id)} 
        onToggleDone= {() => {
          onToggleDone(id);
        }}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;


