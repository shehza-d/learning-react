import styles from "./userlist.module.css";

export default function UserList({ userDataObj }) {
  // export default const Form=()=>{//why is this not allowed
  // console.log(props.userDataObj);
  return (
    <>
      <h2>Users</h2>
      <ul>
        {userDataObj.forEach((element) => {
          console.log(element);
          <li>{element.userName}</li>;
        })}
      </ul>
    </>
  );
}
