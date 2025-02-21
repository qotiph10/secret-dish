import  {React, useState , useContext , createContext , useEffect} from 'react'

const cards = ({inputList}) => {
  return (
    <div className='cards'>
      <div className=' container name_section'>
        <div>
          <h2>Name</h2>
          {inputList.map(({id ,name , nameState}) => (
              <div key={id} className="card" style={{border:`${nameState ? 'green' : 'red'} 5px solid` , background:`${nameState ? 'rgba(0, 128, 0, 0.483)' : 'rgba(255, 0, 0, 0.489)'}`}}> {name}</div>
            ))}
        </div>
      </div>
      
      <div className='container'>
          <div className='s1'>
            <h2>Type of Food</h2>
            {inputList.map(({ id, typeOfFood, typeState }) => (
              <div key={id} className="card" style={{border:`${typeState ? 'green' : 'red'} 5px solid` ,background:`${typeState ? 'rgba(0, 128, 0, 0.483)' : 'rgba(255, 0, 0, 0.489)'}`}}> {typeOfFood}</div>
            ))} 
          </div>
          <div className='s2'>
            <h2>Flavor Profile</h2>
            {inputList.map(({ id, FlavorProfile , flavState }) => (
              <div key={id} className="card" style={{border:`${flavState ? 'green' : 'red'} 5px solid` , background:`${flavState ? 'rgba(0, 128, 0, 0.483)' : 'rgba(255, 0, 0, 0.489)'}`}}> {FlavorProfile}</div>
            ))}
          </div>
          <div className='s3'>
            <h2>Temperature</h2>
            {inputList.map(({ id, temperature, tempState }) => (
              <div key={id} className="card" style={{border:`${tempState ? 'green' : 'red'} 5px solid` ,background:`${tempState ? 'rgba(0, 128, 0, 0.483)' : 'rgba(255, 0, 0, 0.489)'}` }}> {temperature}</div>
            ))}
          </div>
          <div className='s4'>
            <h2>Origin or Region</h2>
            {inputList.map(({ id, region, regState }) => (
              <div key={id} className="card" style={{border:`${regState ? 'green' : 'red'} 5px solid`,background:`${regState? 'rgba(0, 128, 0, 0.483)' : 'rgba(255, 0, 0, 0.489)'}`}}> {region}</div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default cards