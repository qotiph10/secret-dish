import {React , useState} from 'react'
import Input from './input'
import '/code/projects/Secret_dish/my-app/src/MainMenu.css'
const MainMenu = ({start , setStart}) => {
  return (
    <div className='main-menu'>
        <h1 className='menu-h1'>Secret Dish</h1>
        <h2 className='menu-h2'>Guess the secret dish</h2>
        <h2 className='menu-h2'>How to Play:</h2>
        <p className='menu-p'>Guess the secret dish by entering the name of the dish in the input box below.</p>
        <h3 className='menu-h3'>Rules:</h3>
        <p className='menu-p'>1. You have to guess the secret dish by entering the name of the dish in the input box.</p>
        <p className='menu-p'>2. The dish name should be exactly same as the secret dish name.</p>
        <p className='menu-p'>3. The dish name should be less than 10 characters.</p>
        <p className='menu-p'>4. You have to guess the dish in minimum number of tries.</p>
        <p className='menu-p'>5. The dish name is case sensitive.</p>
        <p className='menu-p'>7. The dish name should not have any special characters.</p>
        <p className='menu-p'>8. The dish name should not have any numbers.</p>
        <button className='menu-button' onClick={()=>{setStart(!start)}}>Start</button>    
    </div>
  )
}

export default MainMenu