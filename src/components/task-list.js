import React from 'react';
import { Card } from 'semantic-ui-react';
import TaskCard from './task-card';

const TaskList = ({ contacts }) => {
  const cards = () => {
    return contacts.map(contact => {
      return <TaskCard key={contact._id} contact={contact} />;
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}

export default TaskList;