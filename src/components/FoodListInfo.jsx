import React from "react";
import foodsData from "/code/projects/Secret_dish/my-app/src/utils/data_food.js";
import { IoClose } from "react-icons/io5";
export const FoodListInfo = ({ setInfo, setInput }) => {
  return (
    <div
      className="Board"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "10px",
      }}
    >
      {foodsData.map((food) => (
        <div
          onClick={() => {
            setInput(food.name);
            setInfo(false);
          }}
          key={food.id || food.name}
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fff",
            width: "auto",
            height: "40px",
            cursor: "pointer",
          }}
        >
          {food.name}
        </div>
      ))}
      <div className="ExitButton">
        <IoClose
          size={35}
          color="red"
          onClick={() => {
            setInfo(false);
          }}
        />
      </div>
    </div>
  );
};
