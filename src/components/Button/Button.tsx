import styles from "./button.module.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
