import React from 'react';
import "/code/projects/Secret_dish/my-app/src/style.css";
const header = ({count}) => {
  return (
    <header className="header">   
        <h1 style={{marginLeft:"5rem",}}>Secret Dish</h1>
        <h1 style={{marginRight:"5rem",}}>Gueses: {count} </h1>
    </header>
  )
};

export default header;