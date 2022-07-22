import React from 'react';
import { Card } from 'semantic-ui-react';
import TaskCardTodo from './task-card-todo';

const TaskListTodo = ({ contacts }) => {
  const cards = () => {
    return contacts.map(contact => {
      return <TaskCardTodo key={contact._id} contact={contact} />;
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}

export default TaskListTodo;