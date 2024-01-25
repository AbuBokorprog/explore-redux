import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-evenly">
      <button
        onClick={() => dispatch(increment())}
        className="px-5 py-2 bg-green-400 rounded-md"
      >
        Increment
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="px-5 py-2 bg-red-400 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
