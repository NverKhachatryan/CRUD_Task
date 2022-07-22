import React, { useContext, useEffect } from "react";
import axios from "axios";
import TaskListTodo from "../components/task-list-todo";
import { TaskContext } from "../context/task-context";
import { useParams } from "react-router-dom";

const TaskTodoListPage = () => {
  const [state, dispatch] = useContext(TaskContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3030/todo/`);
      dispatch({
        type: "FETCH_CONTACTS",
        payload: response.data.data || response.data, // in case pagination is disabled
      });
    };
    fetchData();
  }, [dispatch]);

  // why state.contacts length is 50 instead of 200?
  // because the data is fetched from the server, and the server is not running
  // so the data is not available.
  // if the server is running, the data will be available and the length will be 200.
  
  for (let i = 0; i < state.contacts.length; i++) {
    //console.log(state.contacts[i].title);
    if (state.contacts[i].userId === Number(id)) {
      return (
        <div>
          <h1>List</h1>
          <TaskListTodo
            contacts={state.contacts.filter(
              (contact) => contact.userId === Number(id)
            )}
          />
        </div>
      );
    }
  }
  return <div>Loading...</div>;

};

export default TaskTodoListPage;
