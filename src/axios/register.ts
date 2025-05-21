import axios from 'axios';

// 코드 요청
export const requestCode = async (phoneNumber: string) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/send-code', {
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error('인증 코드 요청 실패:', error);
    throw error;
  }
};

// 코드 확인
export const verifyCode = async (phoneNumber:string, code: string) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/verify-code', {
      phoneNumber, code
    });
    return response.data;
  } catch (error) {
    console.error('인증 실패:', error);
    throw error;
  }
};

// 회원가입
export const responseRegister = async (
  nickname: string,
  username: string,
  phoneNumber: string,
  password: string
) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/register', {
      nickname,
      username,
      phoneNumber,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error; 
  }
};
