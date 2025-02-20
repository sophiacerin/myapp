import { useState } from "react";

function Form (){
const onClickHandler=(e) =>{
    e.preventDefault();
    alert("form submitted");
    setName(input);
}
const onChangeHandler=(e)=>{
    console.log(e.target.name, e.target.value);
    input = e.target.value;
}
let input ="no data";
const [getName,setName] = useState();
    return(
        <form>
            <label> Enter Your Name<input type ="text" name = "name" onChange={onChangeHandler}/></label><br/>
              
            <button onClick={onClickHandler}>Submit</button>
            <h1 style={{color:"red", textAlign:"center"}}>{getName}</h1>
        </form>

        
    )
}
export default Form;