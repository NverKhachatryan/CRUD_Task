import React, { useContext, useState } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { TaskContext } from "../context/task-context";
import { flashErrorMessage } from "./flash-message";

const TaskForm = ({ contact }) => {
  const [state, dispatch] = useContext(TaskContext);
  const [redirect, setRedirect] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: contact,
  });

  const createUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:3030/task", data);
      dispatch({
        type: "CREATE_CONTACT",
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const updateUser = async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:3030/task/${contact._id}`,
        data
      );
      dispatch({
        type: "UPDATE_CONTACT",
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const onSubmit = async (data) => {
    if (contact._id) {
      await updateUser(data);
    } else {
      await createUser(data);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: "1em" }}>
          {contact._id ? "Edit Contact" : "Add New Contact"}
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="name">
                First Name
                <input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  {...register("name", { required: true })}
                />
              </label>
              <span className="error">
                {errors &&
                  errors === "required" &&
                  "You need to provide First Name"}
              </span>
              <span className="error">
                {errors &&
                  errors === "minLength" &&
                  "Must be 2 or more characters"}
              </span>
            </Form.Field>
            <Form.Field>
              <label htmlFor="username">
                Last Name
                <input
                  id="username"
                  type="text"
                  placeholder="Last Name"
                  {...register("username", { required: true, minLength: 2 })}
                />
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </label>
            <span className="error">
              {errors &&
                errors === "required" &&
                "You need to provide an Email address"}
            </span>
            <span className="error">
              {errors && errors === "pattern" && "Invalid email address"}
            </span>
          </Form.Field>
          <Form.Field>
            <label htmlFor="phone">
              Phone
              <input
                id="phone"
                type="text"
                placeholder="phone"
                {...register("phone", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="Street">
              Street
              <input
                id="Street"
                type="text"
                placeholder="Street"
                {...register("Street", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="Suite">
              Suite
              <input
                id="Suite"
                type="text"
                placeholder="Suite"
                {...register("Suite", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="city">
              City
              <input

                id="city"
                type="text"
                placeholder="City"
                {...register("city", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="zip">
              Zip Code
              <input
                id="zip"
                type="text"
                placeholder="Zip"
                {...register("zip", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="lat">
              Latitude
              <input
                id="lat"
                type="text"
                placeholder="Latitude"
                {...register("lat", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="lng">
              Longitude
              <input
                id="lng"
                type="text"
                placeholder="Longitude"
                {...register("lng", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="website">
              Website
              <input
                id="website"
                type="text"
                placeholder="Website"
                {...register("website", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="company">
              Company Name
              <input
                id="company"
                type="text"
                placeholder="Company"
                {...register("company", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="catchPhrase">

              Catch Phrase
              <input
                id="catchPhrase"
                type="text"
                placeholder="Catch Phrase"
                {...register("catchPhrase", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="bs">
              Business Sense
              <input
                id="bs"
                type="text"
                placeholder="Business Sense"
                {...register("bs", { required: false, minLength: 2 })}
              />
            </label>
          </Form.Field>
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default TaskForm;
