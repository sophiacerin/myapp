import { useState } from "react";

function HideSeek(){

     const[getFlag, setFlag] = useState(false);
    const onClickHandler = () =>{
        setFlag(true);
        alert('button clicked');
        console.log('getflag',getFlag);
    }


    return(
        <div>
        <button onClick={onClickHandler}>{getFlag ? 'hide' : 'show'}</button>
        {getFlag && 'welcome to Javascript'}
        </div>
    )
}
export default HideSeek;