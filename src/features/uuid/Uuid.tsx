import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCount } from "../counter/counterSlice";
import { getCounterAmountUuid, getOneUuidAsync, selectUuid } from "./uuidSlice";

const Uuid = () => {
  const count = useAppSelector(selectCount);
  const number = useAppSelector(selectUuid);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>{number[0]}</p>
      <button
        onClick={() => {
          dispatch(getOneUuidAsync());
        }}
      >
        get random uuid
      </button>
      <ul>
        {number.map((uuid) => (
          <li key={uuid}>{uuid}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          dispatch(getCounterAmountUuid(count));
        }}
      >
        get counter amount of uuid
      </button>
      <button></button>
    </>
  );
};

export default Uuid;
