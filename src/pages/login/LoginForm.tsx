import Input from "./Input";
import Button from "./Button";
import styles from "./LoginForm.module.css"
import { useState } from "react";
import {signIn} from "../../axios/login"


const LoginForm = ()=>{
    const [form, setForm] =useState({
        username:'',
        password:'',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        };

    const loginUser = async () => {
         try {
             await signIn(form.username, form.password);
             alert('로그인 성공');
           } catch (error) {
             alert('로그인 실패');
             console.error(error);
          }
      };


    return(
    <form className={styles.loginForm}>
         <div>
            <Input 
             label="아이디"
             type="text" 
             name="username" 
             value={form.username}
             onChange={handleChange}
             placeholder="아이디 입력" 
             buttonText="중복확인"
            />
         </div>
         <div>
            <Input 
             label="비밀번호"
             type="password" 
             name="password" 
             value={form.password}
             onChange={handleChange}
             placeholder="비밀번호 입력" 
            />
        </div> 
        <div>
          <input type="checkbox"/>자동로그인하기
        </div>
        <div className={styles.register}> 계정이 없으신가요? </div>
        <Button label="로그인" onClick={loginUser}/>
    </form>
 )
}

export default LoginForm;

// 인풋을 컴포넌트로 구성해도 좋을듯
// 나중에 혹시 회원가입을 만들기 시작하면 
// input은 컴포넌트로 다시 빼서 만들기