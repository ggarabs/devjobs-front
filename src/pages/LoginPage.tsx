import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./../styles/loginpage.module.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Link } from "react-router-dom";

const createUserFormSchema = z.object({
    email: z.string().min(1, "O e-mail é obrigatório").email("Formato de e-mail inválido").toLowerCase(),
    password: z.string().min(1, "A senha é obrigatória").min(6, "A senha precisa de, no mínimo, 6 caracteres")
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

const LoginPage: React.FC = () => {
    const [output, setOutput] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <main className={styles.mainPage}>
            <form action="" className={styles.loginForm} onSubmit={handleSubmit(createUser)}>
                <h1 className={styles.loginTitle}>Login</h1>

                <section className={styles.emailSection}>
                    <div className={styles.inputContainer}>
                        <input type="email" placeholder="E-mail" className={styles.input} {...register('email')} />
                        <img src="/User.png" alt="user" className={styles.icon} />
                    </div>
                    {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
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

                <button type="submit" className={styles.submitButton}>Login</button>
                <p>Don't have an account? <b><Link to="/register">Sign In</Link></b></p>
            </form>

            <pre className={styles.pre}>{output}</pre>
        </main>
    )
}

export default LoginPage;