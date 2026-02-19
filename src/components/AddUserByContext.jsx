import { useReducer } from "react";
import { useUsers } from "../context/useUsers";

const initialState = {
  values: {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  },
  errors: {},
};

const reducerfn = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const validate = (values) => {
  const errors = {};
  if (!values.name?.trim()) errors.name = "Name is required";
  if (!values.username?.trim()) errors.username = "Username is required";
  if (!values.email?.trim()) errors.email = "Email is required";
  if (!values.phone?.trim()) errors.phone = "Phone is required";
  if (!values.website?.trim()) errors.website = "Website is required";

  return errors;
};

const AddUserByContext = () => {
  // useState -> store the data in component; data can mutable; [currentValue, updateFunction]
  // props -> data can't be changed
  // useReducer

  const [state, dispatch] = useReducer(reducerfn, initialState);

  const { addUser } = useUsers()

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state.values);
    const errors = validate(state.values);

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    console.log("Submitted", state.values);
    addUser({ id: Date.now(), ...state.values });
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h4>Add User Form Using useReducer</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={state.values.name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </label>
          {state.errors.name && (
            <p style={{ color: "red" }}>{state.errors.name}</p>
          )}
        </div>
        <div>
          <label>
            User Name:
            <input
              type="text"
              name="username"
              value={state.values.username}
              placeholder="Enter User Name"
              onChange={handleChange}
            />
          </label>
          {state.errors.username && (
            <p style={{ color: "red" }}>{state.errors.username}</p>
          )}
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={state.values.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </label>
          {state.errors.email && (
            <p style={{ color: "red" }}>{state.errors.email}</p>
          )}
        </div>
        <div>
          <label>
            phone:
            <input
              type="text"
              name="phone"
              value={state.values.phone}
              placeholder="Enter phone"
              onChange={handleChange}
            />
          </label>
          {state.errors.phone && (
            <p style={{ color: "red" }}>{state.errors.phone}</p>
          )}
        </div>
        <div>
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={state.values.website}
              placeholder="Enter Website"
              onChange={handleChange}
            />
          </label>
          {state.errors.website && (
            <p style={{ color: "red" }}>{state.errors.website}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUserByContext;
