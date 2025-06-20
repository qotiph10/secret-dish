import { React, useState, useContext, createContext, useEffect } from "react";
import Cards from "./Cards";
import Header from "./header";
import MainMenu from "./MainMenu";
import { Notification } from "./Notification";
import { IoMdInformationCircleOutline } from "react-icons/io";
import foodsData from "/code/projects/Secret_dish/my-app/src/utils/data_food.js";
import { FoodListInfo } from "./FoodListInfo";
//export const InputData = createContext(inputList);
const input = () => {
  let [inputList, setInputList] = useState([]);
  let [input, setInput] = useState("");
  let [count, setCount] = useState(0);
  let [notification, setNotification] = useState(false);
  let [notType, setNotType] = useState("");
  let [info, setInfo] = useState(false);
  const [start, setStart] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && start) {
        add();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, start]);

  const add = () => {
    let index = foodsData.findIndex((food) => food.name === input);
    if (input === "" || input.length > 10 || index === -1) {
      // check if food name is valid or not
      console.log("Invalid food name");
      setInput("");
      setNotification(true);
      setNotType("Invalid");
      return;
    } else {
      const updatedList = [
        ...inputList,
        {
          id: Math.floor(Math.random() * 1000),
          name: input,
          nameState: foodsData[index].name === food.name ? true : false,
          typeOfFood: foodsData[index].typeOfFood,
          typeState:
            foodsData[index].typeOfFood === food.typeOfFood ? true : false,
          temperature: foodsData[index].temperature,
          tempState:
            foodsData[index].temperature === food.temperature ? true : false,
          FlavorProfile: foodsData[index].FlavorProfile,
          flavState:
            foodsData[index].FlavorProfile === food.FlavorProfile
              ? true
              : false,
          region: foodsData[index].region,
          regState: foodsData[index].region === food.region ? true : false,
        },
      ];
      setInputList(updatedList);
      setCount(count + 1);
      setInput("");
      if (foodsData[index].name === food.name) {
        setNotification(true);
        setNotType("Win");
      }
    }
  };
  const [food, setFood] = useState(() => {
    const randomIndex = Math.floor(Math.random() * foodsData.length);
    return foodsData[randomIndex];
  });
  useEffect(() => {
    console.log("Food selected Item is :", food);
  }, []);
  return (
    <>
      {!start ? (
        <MainMenu start={start} setStart={setStart} />
      ) : (
        <>
          <Header count={count} />
          <Cards inputList={inputList} />
          <Notification
            notification={notification}
            setNotification={setNotification}
            notType={notType}
          />
          {info && <FoodListInfo setInfo={setInfo} setInput={setInput} />}
          <section className="input">
            <input
              type="text"
              onChange={(value) => handleChange(value)}
              value={input}
              placeholder="Enter Your Guess"
            />
            <button
              type="submit"
              onClick={() => {
                add();
              }}
            >
              Enter
            </button>
            <div
              className="InfoButton"
              onClick={() => {
                setInfo(!info);
              }}
            >
              <IoMdInformationCircleOutline size={45} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default input;
