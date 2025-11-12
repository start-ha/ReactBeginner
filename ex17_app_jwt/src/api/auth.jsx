import axios from "axios";
const API = axios.create({

    baseURL:'http://localhost:8090',
    withCredentials : true, //쿠키 전송 여부
     headers: {
    "Content-Type": "application/json",  
  },


});

API.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token');
    console.log("전송할 토큰:" + token);

    if(token){
     config.headers['Authorization'] = `Bearer ${token}`; 
    
    }



     return config;
});

//컴포넌트 (여러 개의 함수, 변수 내보낼 수 있다)
//expoert

//API.post('/login')

//login (id, pwd)
export const login = (data) => API.post('/login',data);

//register (id, pwd, 등등 ...)
export const register = (data) => API.post('/register',data);

//user_info
export const getUserInfo = () => API.get('/user/info');

