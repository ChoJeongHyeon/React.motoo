import styles from "./RegisterPage.module.css"
import RegisterForm from "./RegisterForm";
import NavBar from "../../components/NavBar";

const RegisterPage = ()=>{
    return(
    <div className={styles.registerPage}>
        <RegisterForm/>
        회원가입 페이지입니다.
        <NavBar/>
    </div>)
}

export default RegisterPage;