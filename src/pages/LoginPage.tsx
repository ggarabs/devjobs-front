import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./../styles/loginpage.module.css"
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const loginSchema = z.object({
    login: z.string().min(1, "O e-mail é obrigatório"),//.email("Formato de e-mail inválido").toLowerCase(),
    password: z.string().min(1, "A senha é obrigatória").min(1, "A senha precisa de, no mínimo, 6 caracteres")
})

type LoginFormInputs = z.infer<typeof loginSchema>

const LoginPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema)
    })
    const loginMutation = useLogin();

    const onSubmit = (data: LoginFormInputs) => {
        loginMutation.mutate(data);
    }

    return (
        <main className={styles.mainPage}>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.loginTitle}>Login</h1>

                <section className={styles.emailSection}>
                    <div className={styles.inputContainer}>
                        <input placeholder="E-mail" className={styles.input} {...register('login')} />
                        <img src="/User.png" alt="user" className={styles.icon} />
                    </div>
                    {errors.login && <span className={styles.errorMsg}>{errors.login.message}</span>}
                </section>
                <section className={styles.passwordSection}>
                    <div className={styles.inputContainer}>
                        <input type="password" placeholder="Password" className={styles.input} {...register('password')} />
                        <img src="/Lock.png" alt="lock" className={styles.icon} />
                    </div>
                    {errors.password && <span className={styles.errorMsg}>{errors.password.message}</span>}
                </section>

                <div className={styles.linksSection}>
                    <div className={styles.checkboxContainer}>
                        <label className={styles.labelCheckbox}>
                            <input type="checkbox" className={styles.checkbox} />
                            Remember me
                        </label>
                    </div>
                    <Link to="/forgot-password" className={styles.forgotPasswordContainer}>Forgot Password?</Link>
                </div>

                <button type="submit" className={styles.submitButton}>Entrar</button>
                <p>Don't have an account? <b><Link to="/register">Sign In</Link></b></p>
            </form>

        </main >
    )
}

export default LoginPage;