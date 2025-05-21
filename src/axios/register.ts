import axios from 'axios';

import { api } from './axiosInstance';

// 닉네임 중복 확인
export const checkNicknameAvailable = async (nickname: string) => {
  try{
    const response = await api.post('/auth/nickname-check', {
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
    const response = await api.post('/auth/username-check', {
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
