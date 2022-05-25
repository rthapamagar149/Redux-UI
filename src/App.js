import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername,updatephone } from "./features/Users";
import ChangeColor from "./components/ChangeColor";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setphone] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newphone, setnewphone] = useState("");

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="phone"
          onChange={(event) => {
            setphone(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                phone,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
      </div>



      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <h1> {user.phone}</h1>
              <h1> {user.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="New phone..."
                onChange={(event) => {
                  setnewphone(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update Username
              </button>
              <button
                onClick={() => {
                  dispatch(
                    updatephone({ id: user.id, phone: newphone })
                  );
                }}
              >
                {" "}
                Update phone 
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
