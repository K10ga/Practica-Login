import React from 'react'


const Arreglo = () => {
    var usarios=[
    {title:"👴", id:1,nombre:"jose"},
    {title:"🧑", id:2, nombre:"Edu"},
    {title:"🎅", id:3, nombre:"Dani"},
];


  return (
    <>
      <h2>Lista de uuarios sin destructuradas</h2>
      <ul>
        {usarios.map((usarios) =>(
            <li  key={usarios.nombre}>---{usarios.title}</li>
        ))} 
      </ul>
      <hr />
      <h2>Lista de uuarios destructuradas</h2>
    <ul>
          {usarios.map(({id,nombre,title}) =>(
            <li  key={id}>{nombre}---{title}</li>
        ))} 
    </ul>
    </>
  )
}

export default Arreglo
