import http from "./httpService"

export const signupUser=(data)=>{
    return http.post("/user/login",data)
};