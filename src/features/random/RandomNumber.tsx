import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectNumber, showNumberAsync } from "./randomNumberSlice";

const RandomNumber = () => {
  const count = useAppSelector(selectNumber);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(showNumberAsync());
        }}
      >
        reset from API
      </button>
    </>
  );
};

export default RandomNumber;
