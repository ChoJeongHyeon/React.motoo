import axios from 'axios';

// 닉네임 중복 확인
export const checkNicknameAvailable = async (nickname: string) => {
  try{
    const response = await axios.post('http://localhost:8080/api/auth/nickname-ckeck', {
      nickname,
    });
    return response.data;
  } catch(error){
    console.error('닉네임 중복 확인 실패:', error);
    throw error;
  }
}

// id 중복 확인
export const checkUsernameAvailable = async (username: string) => {
  try{
    const response = await axios.post('http://localhost:8080/api/auth/username-check', {
      username,
    });
    return response.data;
  } catch(error){
    console.error('id 중복 확인 실패:', error);
    throw error;
  }
}

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
