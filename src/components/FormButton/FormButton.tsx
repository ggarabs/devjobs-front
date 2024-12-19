import styles from "./formbutton.module.css";

interface ButtonProps {
  text: string;
}

const FormButton = ({ text }: ButtonProps) => {
  return <button className={styles.button}>{text}</button>;
};

export default FormButton;
