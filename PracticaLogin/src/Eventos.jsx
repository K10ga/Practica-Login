import React from 'react'

const Eventos = () => {
    const daClick= (id, nombre) =>{
        alert(`Tus registros son ----> ID${id} - Nombre:${nombre}`)
    }
    const dosClick=(palabra) =>{
        alert(`${palabra}`)
    }
    const hasEntrada=(mensaje) =>{
        console.log(mensaje);
    }
    const hasSalida=(mensaje2) =>{
        console.log(mensaje2)
    }
  return (
    <>
    <button onClick={() => daClick(3,"Kioga")}>
        Da click aqui
    </button>
    <button onDoubleClick={() => dosClick("peruuuuuuuuuu")}>
        Da doble click

    </button>
    <div id='caja'
        onMouseEnter={() => hasEntrada("Mosue dentro de la caja")}
        onMouseLeave={() => hasSalida("Mouse fuera sw la caja")}>
        <p>caja ewkjhdbewkjdx</p>
    </div>
      
    </>
    
  )
}

export default Eventos
