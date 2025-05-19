import axios from 'axios';

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
