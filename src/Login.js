import { useState } from "react";
// import { useNavigate } from "react-router-dom";



function Login(){
    // const Navigate =useNavigate();
    const[users,setUsers] = useState([]);
    const onClickHandler = (e) =>{
        e.preventDefault();
        console.log(users);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email",users.email);
        setUsers({name:"", email:""})
        // Navigate('/Table');
       
    }
    return(
        <div>
            <input type="text" name="name" value={users.name} placeholder="Enter your name"onChange={(e) => setUsers({ ...users, name: e.target.value })}/>
            <input type ="email" name="email" value={users.email} placeholder="enter your email" onChange={(e)=>setUsers({...users, email :e.target.value})}/>
            <button onClick={onClickHandler}>Submit</button>
        </div>
    )
}
export default Login;