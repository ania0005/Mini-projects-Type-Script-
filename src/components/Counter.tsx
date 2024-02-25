import React, { useState } from "react";
import { RootState } from "../redux/storeRTK";
import { useDispatch, useSelector } from "react-redux";
import { change, changeUniversal } from "../redux/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);

  const [value, setValue] = useState(counter);
  const dispatch = useDispatch();

  
  const handleReset = () => {
    dispatch({ type: "counter/reset" });
  };

  const handleChange = () => {
    if(!isNaN(value)) {
      dispatch(change(value))
    }
    
  };

  const handleChangeUniversal = (x: number) => {
    dispatch(changeUniversal(x))
  };
  

  return (
    <div className="counter" >
      <h2 style={{ marginLeft: "20px" }}>Counter: {counter}</h2>
      <div>
        <input type="text" onChange={(e) => setValue(+e.target.value)} style={{ marginLeft: "20px" }} />
        <button onClick={handleChange} style={{ marginLeft: "10px" }}>Click me!</button>
        <button onClick={() => handleChangeUniversal(-counter)} style={{ marginLeft: "10px" }}>Reset</button>
      </div>
      <button onClick={() => handleChangeUniversal(1)} style={{ marginLeft: "20px" }}>Decrement</button>
      <button onClick={() => handleChangeUniversal(-10)} style={{ marginLeft: "10px" }}>Decrement10</button><br/>
      
      <button onClick={() => handleChangeUniversal(-1)} style={{ marginLeft: "20px" }}>Increment</button>     
      <button onClick={() => handleChangeUniversal(10)} style={{ marginLeft: "17px" }}>Increment10</button>
      

      
    </div>
  );
};

export default Counter;

