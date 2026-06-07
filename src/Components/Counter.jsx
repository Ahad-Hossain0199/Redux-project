import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector(
    (state) => state.counter.count
  );

  return (
    <h1 className="text-5xl font-bold text-center">
      {count}
    </h1>
  );
};

export default Counter;