import  {React, useState , useContext , createContext , useEffect } from 'react'
import Cards from './cards'
import Header from './header'
import MainMenu from './MainMenu'
import foodsData from '/code/projects/Secret_dish/my-app/src/utils/data_food.js';
//export const InputData = createContext(inputList);
const input = () => {
  let [inputList, setInputList] = useState([]);
  let [input, setInput] = useState('');
  let [count , setCount] = useState(0);
  const [start, setStart] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const add = () => {
    let index = foodsData.findIndex(food => food.name === input);
    if(input === '' || input.length > 10 || index === -1){ return;}
    else {
      const updatedList = [...inputList, {id: Math.floor(Math.random()* 1000) , name: input , nameState: foodsData[index].name === food.name ? true : false,
        typeOfFood: foodsData[index].typeOfFood, typeState: foodsData[index].typeOfFood === food.typeOfFood ? true : false,
         temperature: foodsData[index].temperature, tempState: foodsData[index].temperature === food.temperature ? true : false,
         FlavorProfile: foodsData[index].FlavorProfile, flavState: foodsData[index].FlavorProfile === food.FlavorProfile ? true : false,
          region: foodsData[index].region, regState: foodsData[index].region === food.region ? true : false}];
     setInputList(updatedList);
     setCount(count + 1);
     setInput('');
    }
  }
  const [food, setFood] = useState(() => {
    const randomIndex = Math.floor(Math.random() * foodsData.length);
    return foodsData[randomIndex];
  });
  useEffect(() => {
    console.log("Food selected Item is :", food);
  }, []);
  return (<>
    {!start ? <MainMenu start={start} setStart={setStart}/> :
    <> 
      <Header count = {count}/>
      <Cards inputList={inputList}/>
      <section className='input'>
          <input type='text' onChange={(value)=>handleChange(value)} value={input} placeholder='Enter Your Guess'/>
          <button type='submit' onClick={()=>{add()}}>Enter</button>
      </section>
    </>}
    </>
  )
}

export default input