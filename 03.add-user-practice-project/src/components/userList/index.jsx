import styles from "./userlist.module.css";

export default function UserList({ userDataObj }) {
  // export default const Form=()=>{//why is this not allowed
  console.log(userDataObj);
  return (
    <>
      <h2>Users List </h2>
      <ul>
        {/* ForEach doesn't work because hum kuxh return karna hy (i still don't know why)*/}
        {userDataObj?.map((element, i) => (
          <li key={i}>
            <span>{element.userName}</span>
            <span>({element.userAge} Years Old)</span>
          </li>
        ))}
      </ul>
    </>
  );
}
