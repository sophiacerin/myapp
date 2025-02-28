import React from 'react'

function Map() {
  const person =[
    {id:1, name:"sophia", job:"Developer" },
    {id:2, name:"raaj", job:"Mariner" },
    {id:3, name:"preethi", job:"FSO" },
    {id:4, name:"chelsi", job:"Chemist" },
    {id:5, name:"rheanna", job:"Student" }
  ];
  return (
    <div>
        <h3>Map Function</h3>
        <ul>
        {
          person.map( (item) =>(
            <li key={item.id}>{item.name}({item.job}) </li>
          ))
        }
        </ul>
    </div>
  )
}

export default Map