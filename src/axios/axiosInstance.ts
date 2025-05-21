import axios from "axios";

// axios 인스턴스화
export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  // 요청 경로 간단하게 작성가능
  withCredentials: true,  
  // 모든 요청에 인증정보(쿠키/세션)를 자동 포함
});