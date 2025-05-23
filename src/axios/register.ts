import axios from 'axios';

import { api } from './axiosInstance';

// 닉네임 중복 확인
// post와 달리 get요청 -> 2번째 인자가 요청 옵션 객체로 들어간다.
// { params: { ... } } 다음과 같이 작성하지 않으면 header로 착각할 수 있다.
export const checkNicknameAvailable = async (nickname: string) => {
  try{
    const response = await api.get('/auth/check-nickname', {
      params: { nickname },
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
    const response = await api.get('/auth/check-username', {
      params: { username },
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
    const response = await api.post('/auth/send-code', {
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
    const response = await api.post('/auth/verify-code', {
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
    const response = await api.post('/auth/register', {
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
