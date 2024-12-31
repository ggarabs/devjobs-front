import styles from "./../styles/registerpage.module.css";
import FormButton from "../components/FormButton/FormButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "../hooks/useRegister";

const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
  role: z.string(),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });
  const registerMutation = useRegister();

  const onSubmit = (data: RegisterFormInputs) => {
    registerMutation.mutate(data);
  };

  return (
    <main className={styles.mainPage}>
      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.registerTitle}>Register</h1>

        <section className={styles.usernameSection}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Username"
              className={styles.input}
              {...register("username")}
            />
          </div>
        </section>
        <section className={styles.passwordSection}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Password"
              className={styles.input}
              type="password"
              {...register("password")}
            />
          </div>
        </section>
        <section className={styles.confirmPasswordSection}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Confirm Password"
              className={styles.input}
              type="password"
            />
          </div>
        </section>
        <section className={styles.rolesSection}>
          <div className={styles.inputSelectContainer}>
            <select className={styles.inputSelect} {...register("role")}>
              <option value="" disabled>
                Select a Role
              </option>
              <option className={styles.options} value="ROLE_RECRUITER">
                Recruiter
              </option>
              <option className={styles.options} value="ROLE_CANDIDATE">
                Candidate
              </option>
            </select>
          </div>
        </section>

        <FormButton text="Sign Up" />

        <p>
          Already have an account?{" "}
          <b>
            <Link to="/login">Sign In</Link>
          </b>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;
