import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TaskListPage from './pages/task-list-page';
import TaskFormPage from './pages/task-form-page';
import TaskTodoListPage from './pages/task-todo-page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeclassname="active" exact to="/">
          Users List
        </NavLink>
        <NavLink
          className="item"
          activeclassname="active"
          exact
          to="/task/new"
        >
          Add Users
        </NavLink>
      </div>
      <Routes>
        <Route exact path="/" element={<TaskListPage />} />
        <Route path="/task/new"  element={<TaskFormPage />}  />
        <Route path="/task/edit/:_id" element={<TaskFormPage />} />
        <Route path="/task/:id" element={<TaskTodoListPage />} />
      </Routes>
    </Container>
  );
};

export default App;