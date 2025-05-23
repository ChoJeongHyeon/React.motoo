import { api } from './axiosInstance';

// 로그인
export const signIn = async (
  username: string,
  password: string
) => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error; 
  }
};