import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/storeRTK";
import { addIngredient, clear } from "../redux/sandwich/sandwichSlice";

const Sandwich = () => {
  // Получение данных из глобального состояния
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(clear());
  };

  return (
    <div className="sandwich" >
      <h1 style={{ marginLeft: "20px"}}>Choose your sandwich:</h1>
      <p style={{ marginLeft: "20px" }}>Sandwich: {ingredients}</p>
      <button onClick={() => dispatch(addIngredient('bread'))} style={{ marginLeft: "20px" }}>Add Bread</button>
      <button onClick={() => dispatch(addIngredient('cheese'))} style={{ marginLeft: "10px" }}>Add Cheese</button>
      <button onClick={() => dispatch(addIngredient('salami'))} style={{ marginLeft: "10px" }}>Add Salami</button>

      <button onClick={handleDelete} style={{ marginLeft: "20px" }}>Delete all ingredients</button>
    </div>
  );
};

export default Sandwich;