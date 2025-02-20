import { useState } from "react";

function ColorPicker(){

    const [getStyle, setStyle] = useState({
        border :'1px solid black',
        width:'100px',
        height :'100px',
        margin:'auto'
    });
    const onChangeColorHandler =(e) =>{
        setStyle({...getStyle, backgroundColor:e.target.value});

    };
    const onChangeHeightHandler=(e) =>{
        setStyle({...getStyle, height:e.target.value });
    };
    const onChangeWidthtHandler=(e) =>{
        setStyle({...getStyle, width:e.target.value});
    };

    return(
        <div>
            Enter the Color : <input type="text" onChange={onChangeColorHandler}></input>
            Enter the height : <input type="text" onChange={onChangeHeightHandler}></input>
            Enter the width: <input type="text" onChange={onChangeWidthtHandler}></input>
            <div style={getStyle}></div>
         
        </div>
    )
}
export default ColorPicker;