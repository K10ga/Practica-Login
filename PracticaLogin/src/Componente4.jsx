import React from 'react'
//import React, { useState, useEffect } from 'react'  <-- Que tipo de importacion es, y por que ?
import { useState, useEffect } from 'react' //importamos Hooks

const Componente4 = () =>{

    const [usuario, setUsuario] = useState("Kioga Lee");
    const [fecha, setFecha] = useState("01-01-2000");

    useEffect(() => {
    console.log("Has cargado el componente PruebasHoos")
    },[usuario]);


    const modUsuario = (e) => {
        setUsuario(e.target.value);

    }

    const cambiarFecha = () => {
        setFecha(new Date().toLocaleDateString());

    }


return (
    <>
        <hr />
        <h2>Hooks trabajando juntos 😉  UseState y UseEffect</h2>
        <strong className='label'>{usuario}</strong><br />
        <strong className='label'>{fecha}</strong>

        <p>
            <input type="text"
            onChange={modUsuario}
            placeholder="Cambia el Nombre"
            />
        <button onClick={cambiarFecha}>Cambiar fecha</button>

        </p>
    </>
)
}
export default Componente4