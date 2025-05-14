import styles from "./LoginPage.module.css"
import LoginForm from "./LoginForm";
import NavBar from "../../components/NavBar";
const LoginPage = ()=>{
    return(
    <div>
        <LoginForm/>
        로그인 페이지입니다.
        <NavBar/>
    </div>)
}

export default LoginPage;