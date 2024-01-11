/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "../redux/counter/counterSlice";

const CounterView = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="font-semibold text-2xl">Counter App</div>
      <div>Count: {count}</div>
      <div>
        <button
          className="bg-sky-400 text-white font-bold px-4 py-1 rounded border-2 border-sky-600 "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-sky-400 text-white font-bold px-4 py-1 rounded border-2 border-sky-600 "
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-sky-400 text-white font-bold px-4 py-1 rounded border-2 border-sky-600 "
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="bg-sky-400 text-white font-bold px-4 py-1 rounded border-2 border-sky-600 "
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default CounterView;
