import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInputReq, resetData } from "../../api/gallerySlice.ts";
import type { RootState } from "../../app/store/store.ts";

const Search = ({ position = "center" }: { position?: "left" | "center" }) => {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootState) => state.gallery);

  const searchPosition =
    position === "left" ? styles.search_left : styles.search_center;

  return (
    <div className={searchPosition}>
      <Input />
      <Button
        title={"Искать"}
        onclick={() => {
          dispatch(resetData());
          dispatch(setInputReq(input));
        }}
      />
    </div>
  );
};

export { Search };
