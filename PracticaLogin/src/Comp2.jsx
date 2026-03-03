import React from 'react'
import Cuyo from './assets/Cuyo.webp'

const Comp2 = () => {
  return (
    <>
    <div id='Comp2'>
      <h2 className='subtitulo'>cuyo peruano</h2>
      <img src={Cuyo} alt="cuyo peruano" />
    </div>

    <div style={{textAlign: "center",
      color: "blue",
      fontFamily: "cursive"
    }}>
      <p>Un cuyo comestible</p>
    </div>
    </>
  
  )
}

export default Comp2

