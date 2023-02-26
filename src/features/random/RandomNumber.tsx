import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectNumber,
  selectStatus,
  showNumberAsync,
} from "./randomNumberSlice";
import "./RandomNumber.css";

const RandomNumber = () => {
  const count = useAppSelector(selectNumber);
  const loading = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  return (
    <>
      <p role="paragraph">{count}</p>
      <button
        data-testid="async-button"
        onClick={() => {
          dispatch(showNumberAsync());
        }}
        disabled={loading !== "idle"}
      >
        {loading !== "idle" ? (
          <p className="spinner spinner--quarter"></p>
        ) : (
          <p>reset from API</p>
        )}
      </button>
    </>
  );
};

export default RandomNumber;
