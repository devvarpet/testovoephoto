import "./App.module.css";
import { Search } from "../components/Search";
import { PhotoGallery } from "../components/PhotoGallery";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store.ts";
import styles from "./App.module.css";

function App() {
  const { data } = useSelector((state: RootState) => state.gallery);
  return (
    <div className={styles.container}>
      {data.length > 0 ? <Search position={"left"} /> : <Search />}
      {data && <PhotoGallery />}
    </div>
  );
}

export default App;
