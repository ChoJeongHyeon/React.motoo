import styles from "./RegisterForm.module.css"
import Input from "../login/Input"
import { useState } from "react" 
import {checkNicknameAvailable, checkUsernameAvailable, requestCode, verifyCode, responseRegister} from "../../axios/register"
import Button from "../login/Button"

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
    // 닉네임 중복 함수
    const nicknameCheck= async () => {
        try {
            await checkNicknameAvailable(form.nickname);
            alert('사용 가능한 닉네임입니다.');
        } catch (error) {
            alert('중복확인 실패');
            console.error(error);
        }
    };
    // 유저id 중복 함수
    const usernameCheck = async () => {
        try {
            await checkUsernameAvailable(form.username);
            alert('사용 가능한 id입니다.');
        } catch (error) {
            alert('중복확인 실패');
            console.error(error);
        }
    };
    // 인증번호 발급 함수
    const phoneNumberCheck = async () => {
        try {
            await requestCode(form.phoneNumber);
            alert('인증번호가 전송되었습니다.');
        } catch (error) {
            alert('인증번호 전송 실패');
            console.error(error);
        }
    };
    // 인증번호 확인 함수
    const codeCheck = async () => {
        try{
            await verifyCode(form.phoneNumber, form.code);
            alert('인증 성공');
        } catch (error) {
            alert('인증 실패');
            console.error(error);
        }
    };
    // 회원가입 함수
    const registerUser= async ()=>{
        try{
            await responseRegister(form.nickname, form.username, form.phoneNumber, form.password);
            alert('인증 성공');
        } catch(error){
            alert('회원가입 실패');
            console.error(error);
        }
    }
    
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
             onClick={codeCheck}
             buttonText="확인"
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
            <Button label="회원가입" onClick={registerUser}/>
        </div>
    )
}

export default RegisterForm;