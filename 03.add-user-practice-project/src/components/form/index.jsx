import { useState } from "react";
import styles from "./form.module.css";

export default function Form(props) {
  // export default const Form=()=>{//why is this not allowed

  const [userName, setUserName] = useState(null);
  const [userAge, setUserAge] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userAge) return console.log("Please enter Data!");

    props.setUserDataObj((prev) => [...prev, { userName, userAge }]);
  };

  return (
    <>
      <h1>Add Users</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="userName"></label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          name="userName"
          id="userNameInput"
        />
        <label htmlFor="userAge"></label>
        <input
          type="number"
          onChange={(e) => setUserAge(e.target.value)}
          name="userAge"
          id="userAgeInput"
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
