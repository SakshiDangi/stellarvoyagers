import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.scss";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <p>Admin username: test1 & password: test123</p>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;