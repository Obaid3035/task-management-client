import { IAuth, ILogin } from "../../interface";
import axiosInstance from "../axios";

export function register(userInput: IAuth) {
  return axiosInstance.post('/auth/register', userInput);
}

export function login(userInput: ILogin) {
  return axiosInstance.post('/auth/login', userInput);
}

export function logout() {
  return axiosInstance.post('/auth/logout')
}

export function authorize() {
  return axiosInstance.post('/auth')
}
