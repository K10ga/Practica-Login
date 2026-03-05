import React from 'react';

const buttonStyle = {
  background: 'blue',
  color: 'white',
  height: '40px',
  minWidth: '50px', 
  cursor: 'pointer'
};

const buttonSecondary = {
  background: 'gray',
  color: 'black'
};


function Button({ text = "Sin texto", action, type = "primary" }) {
  
  const handleClick = () => {
    if (action) {
      action();
    } else {
      alert("Función no provista");
    }
  };

  return (
    <button 
      onClick={handleClick}
      style={
        type === "primary" 
          ? buttonStyle 
          : { ...buttonSecondary, padding: "10px 20px" }
      }
    >
      {text}
    </button>
  );
}

export default Button;