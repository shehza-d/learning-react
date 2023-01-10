import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Model from "./components/model";
import UserList from "./components/userList";

function App() {
  const [userDataObj, setUserDataObj] = useState([]);
  // console.log(userDataObj);

  return (
    <div className="App">
      <Model />
      <Form setUserDataObj={setUserDataObj} />
      <UserList userDataObj={userDataObj}/>
    </div>
  );
}

export default App;
