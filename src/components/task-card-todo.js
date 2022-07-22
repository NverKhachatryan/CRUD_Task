import React from 'react';
import { Card } from 'semantic-ui-react';


const TaskCardTodo = ({ contact }) => {

  return (
    <Card>
        <Card.Content>
            <Card.Header>
                Task #: {contact.id}
            </Card.Header>
            <Card.Header>
                Title: {contact.title}
            </Card.Header>
            <Card.Header>
                Completed: {contact.completed ? 'True' : 'False'}
            </Card.Header>
          </Card.Content>
    </Card>
  );
}

export default TaskCardTodo;