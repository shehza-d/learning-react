import "./App.css";
import Form from "./components/form";
import Model from "./components/model";
import UserList from "./components/userList";

function App() {
  
  return (
    <div className="App">
      <Model />
      <Form />
      <UserList />
    </div>
  );
}

export default App;
