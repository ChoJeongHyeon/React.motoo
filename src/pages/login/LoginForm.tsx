import styles from "./LoginForm.module.css"
import { useState } from "react";

const LoginForm = ()=>{

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

    return(
    <form className={styles.loginForm}>
         <div>
            <div >아이디</div>
            <div className={styles.inputBox}>
                <input 
                 type="text"
                 value={id}
                 onChange={handleId}
                 placeholder="아이디 입력"
                 className={styles.input}/>
            </div>
         </div>
         <div>
            <div>비밀번호</div>
            <div className={styles.inputBox}>
                <input 
                 type="password"
                 value={password}
                 onChange={handlePassword}
                 placeholder="비밀번호 입력"
                 className={styles.input}/>
            </div>
        </div> 
        <div>
          <input type="checkbox"/>자동로그인하기
        </div>
        <div className={styles.register}> 계정이 없으신가요? </div>
        <div className={styles.button}>로그인버튼</div>
    </form>
 )
}

export default LoginForm;

// 인풋을 컴포넌트로 구성해도 좋을듯
// 나중에 혹시 회원가입을 만들기 시작하면 
// input은 컴포넌트로 다시 빼서 만들기