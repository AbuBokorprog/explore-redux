import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-evenly">
      {/* increment by 5 */}
      <button
        className="px-5 py-2 bg-green-400 rounded-md"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment by 5
      </button>
      <button
        className="px-5 py-2 bg-green-400 rounded-md"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h1>{value}</h1>
      <button
        className="px-5 py-2 bg-red-400 rounded-md"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
