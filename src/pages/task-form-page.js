import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/task-form';
import { flashErrorMessage } from '../components/flash-message';
import { TaskContext } from '../context/task-context';
import { useParams } from 'react-router-dom';

const TaskFormPage = () => {
  const [state, dispatch] = useContext(TaskContext);
  const [loading, setLoading] = useState(true);

  const { _id } = useParams()

  useEffect(() => {


    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/task/${_id}`,
          );
          dispatch({
            type: 'FETCH_CONTACT',
            payload: response.data,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [_id, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <TaskForm contact={state.contact} />
    </div>
  );
}

export default TaskFormPage;