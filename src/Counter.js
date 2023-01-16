import React from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";

export const Counter = () => {
  // const [counter, setCounter] = useState(572);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  //**this below code uses normal useState  */
  // const handleIncrease = () => {
  //   setCounter((counter) => counter + 1);
  // };
  // const handleDecrease = () => {
  //   setCounter((counter) => counter - 1);
  // };

  //**this code uses normal redux  */
  // const handleIncrease = () => {
  //   dispatch({ type: "increment" });
  // };

  // const handleDecrease = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const handleAdd = () => {
  //   dispatch({ type: "increase", payload: 5 });
  // };

  // const toggleCounter = () => {
  //   dispatch({ type: "toggle" });
  // };

  //**this code uses redux toolkit */
  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrease = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div className="counter">
      {show && <div className="counter--number">{counter}</div>}
      <div className="buttons">
        <button className="incr--btn" onClick={handleIncrease}>
          Increase
        </button>
        <button className="dcr--btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="dcr--btn" onClick={handleAdd}>
          Add 5
        </button>
      </div>
      <button className="toggle--counter" onClick={toggleCounter}>
        Toggle Counter
      </button>
    </div>
  );
};
