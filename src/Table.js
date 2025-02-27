import { useState } from "react";

function Table() {
  const [users, setUsers] = useState([]); // Array to store multiple users
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Handle input change
  const onChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Function to clear input fields
  const clearingData = () => {
    setNewUser({ name: "", email: "" });
  };
  
  // Function to save data in LocalStorage
  const onClickHandler = (e) => {
    e.preventDefault();
    
    if (!newUser.name || !newUser.email) {
      alert("Please enter both name and email!");
      return;
    }
    if(newUser.length<5){
        alert("please enter the valid name")
    }    
    const updatedUsers = [...users, newUser]; // Add new user to the array
    setUsers(updatedUsers);

    // Store the entire array in LocalStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Store the latest email in SessionStorage
    sessionStorage.setItem("email", newUser.email);

    clearingData(); // Clear the input fields
  };

  // Load data from LocalStorage when component mounts
//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     setUsers(storedUsers);
//   }, []);

  return (
    <div>
      <h1>CRUD Operations</h1>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        onChange={onChangeHandler}
        value={newUser.name}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        name="email"
        onChange={onChangeHandler}
        value={newUser.email}
      />
      <button onClick={onClickHandler}>Submit</button>

      {/* Display Users in a Table */}
      <h2>Stored Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

