import styles from "./largebutton.module.css";

interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return <button className={styles.button}>{text}</button>;
};

export default Button;
