import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.flatMap((todo, index) => [
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />,
        index < todos.length - 1 && <hr key={`hr-${index}`} />
      ])}
    </>
  )
}

export default TodoList
