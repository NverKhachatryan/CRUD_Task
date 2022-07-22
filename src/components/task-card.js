import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import  axios  from  'axios';
import  { TaskContext }  from  '../context/task-context';
import  { flashErrorMessage }  from  './flash-message';
import { NavLink } from 'react-router-dom';


const  { useContext }  =  React;

const TaskCard = ({ contact }) => {
  const [dispatch] = useContext(TaskContext);

  const deleteUser = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:3030/task/${id}`,
      );
      dispatch({
        type: 'DELETE_CONTACT',
        payload: response.data,
      });
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  return (
    <Card>
        <Card.Content>
          <NavLink to={`/task/${contact.uid}`}>
            <Card.Header>
              <Icon name="user outline" /> 
              {contact.username}
            </Card.Header>
          </NavLink>
            <Card.Description>
              <p>
                <Icon name="mail outline" /> {contact.email}
              </p>
            </Card.Description>
            <Card.Description>
              <p>
                <Icon name="phone" /> {contact.phone}
              </p>
            </Card.Description>
            {/* <Card.Description>
              <p>
                <Icon name="home" /> {contact.address.street} {contact.address.suite} {contact.address.sity} {contact.address.zipcode} {contact.address.geo.lat} {contact.address.geo.lng}
              </p>
            </Card.Description>
            <Card.Description>
              <p>
               <Icon name='desktop' />  Website: {contact.website}
              </p>
            </Card.Description>
            <Card.Description>
              <p>
                <Icon name='building outline' /> Company Name: {contact.company.name}
              </p>
            </Card.Description>
            <Card.Description>
              <p>           
                <Icon name="bullhorn" /> CatchPhrase: {contact.company.catchPhrase}
              </p>
            </Card.Description>
            <Card.Description>
              <p>
                <Icon name='tag' /> Business Sense: {contact.company.bs}
              </p>
            </Card.Description> */}
          </Card.Content> 
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" as={Link} to={`/task/edit/${contact._id}`}>
                Edit
              </Button>
              <Button basic color="red" onClick={() => deleteUser(contact._id)}>
                Delete
              </Button>
            </div>
        </Card.Content>
    </Card>
  );
}

export default TaskCard;