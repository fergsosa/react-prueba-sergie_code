import { useEffect, useRef } from "react";
import { UseForm } from "../hooks/UseForm";

export const FormularioComponent = () => {
  const focusRef = useRef();

  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  // const { formState, onInputChange } = UseForm(initialForm);

  // const { userName, email, password } = formState;
  const { formState, userName, email, password, onInputChange } =
    UseForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
