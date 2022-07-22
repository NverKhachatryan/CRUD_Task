import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/task-list';
import { TaskContext } from '../context/task-context';
import { FlashMessage, flashErrorMessage } from '../components/flash-message';

const TaskListPage = () => {
  const [state, dispatch] = useContext(TaskContext);

  // get the user id from database
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get('http://localhost:3030/task/');
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: response.data.data || response.data, // in case pagination is disabled
      });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>List of Users</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <TaskList contacts={state.contacts} />
    </div>
  );
}

export default TaskListPage;