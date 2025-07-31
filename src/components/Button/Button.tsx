import styles from "./Button.module.css";
const Button = ({ title, onclick }: { title: string; onclick: () => void }) => {
  return (
    <button className={styles.button} onClick={onclick}>
      {title}
    </button>
  );
};

export { Button };
