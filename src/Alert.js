import React from "react";

function Alert(){
    function handleClick(){
        alert('Button Clicked!');
    }
    return(
        <button onClick={handleClick}>Click Me..</button>
    )
}
export default Alert;