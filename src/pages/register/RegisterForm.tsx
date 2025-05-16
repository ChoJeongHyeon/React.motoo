import styles from "./RegisterForm.module.css"
import Input from "../login/Input"
import { useState } from "react" 
import {requestCode} from "../../axios/register"

const RegisterForm = ()=> {
    const [form, setForm] =useState({
        nickname: '',
        username:'',
        phoneNumber:'',
        code:'',
        password:'',
        passwordCheck:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const nicknameCheck=()=>{
        return(console.log("중복확인"))
    }
    const usernameCheck=()=>{
        return(console.log("중복확인"))
    }
    const phoneNumberCheck = async () => {
        try {
            await requestCode(form.phoneNumber);
            alert('인증번호가 전송되었습니다.');
        } catch (error) {
            alert('인증번호 전송 실패');
            console.error(error);
        }
    };
    
    return(
        <div className={styles.registerForm}>
            <div>회원가입</div>
            <Input 
             label="닉네임"
             type="text" 
             name="nickname" 
             value={form.nickname}
             onChange={handleChange}
             placeholder="닉네임 작성"
             onClick={nicknameCheck}
             buttonText="중복확인"
            />
            <Input 
             label="아이디"
             type="text" 
             name="username" 
             value={form.username}
             onChange={handleChange}
             placeholder="아이디 입력" 
             onClick={usernameCheck}
             buttonText="중복확인"
            />
            <Input 
             label="전화번호"
             type="tel" 
             name="phoneNumber" 
             value={form.phoneNumber}
             onChange={handleChange}
             placeholder="전화번호 입력" 
             onClick={phoneNumberCheck}
             buttonText="인증번호 발급"
            />
            <Input 
             label="인증번호"
             type="number" 
             name="code" 
             value={form.code}
             onChange={handleChange}
             placeholder="인증번호 입력" 
            />
            <Input 
             label="비밀번호"
             type="password" 
             name="password" 
             value={form.password}
             onChange={handleChange}
             placeholder="비밀번호 입력" 
            />
            <Input 
             label="비밀번호 재입력"
             type="password" 
             name="passwordCheck" 
             value={form.passwordCheck}
             onChange={handleChange}
             placeholder="비밀번호 재입력" 
            />
        </div>
    )
}

export default RegisterForm;