import React from 'react'

const Comp1 = (props) => {
  function Nieto(){
    return(
      <>
          <h3>soy el nieto</h3>
          <h4>el nieto dice {props.nomb}</h4>

      </>
    )
  }
  return (
    <div>
      <h1>Componente 1</h1>
      <p>{props.nomb} {props.apellidos}</p>
      <li>Kioga</li>
      <li>carlitos</li>
      <li>uzy</li>
      <Nieto/>
    </div>
  )
}

export default Comp1
