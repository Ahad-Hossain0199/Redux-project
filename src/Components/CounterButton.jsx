import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "./counterSlice";

const CounterButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 justify-center mt-4 font-bold">
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 px-8 py-4 rounded text-white"
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 px-8 py-4 rounded text-white"
      >
        -
      </button>
    </div>
  );
};

export default CounterButton;