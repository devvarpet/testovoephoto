import SearchIcon from "../../assets/lupa.svg";
import ClearSearchIcon from "../../assets/clearSearch.svg";
import styles from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../../api/gallerySlice.ts";
import type { RootState } from "../../app/store/store.ts";

const Input = () => {
  const { input } = useSelector((state: RootState) => state.gallery);
  const dispatch = useDispatch();

  return (
    <div className={styles.input}>
      <img
        src={SearchIcon}
        alt="search"
        style={{ width: "19px", height: "20px" }}
      />
      <input
        type="text"
        placeholder="Телефоны, яблоки, груши..."
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
        className={styles.input_input}
      />
      {input !== "" && (
        <img
          src={ClearSearchIcon}
          alt="Clear search"
          onClick={() => dispatch(setInput(""))}
          className={styles.input_clear}
        />
      )}
    </div>
  );
};

export { Input };
