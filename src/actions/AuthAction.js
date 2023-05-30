import * as AuthApi from "../api/AuthRequest"

export const logIn = (formData)=> async(disptach)=>{
    try {
        disptach({type:"AUTH_START"})
        const {data} = AuthApi.logIn(formData)
        disptach({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(`Error from AuthAction.js logIn : ${error}`)
        disptach({type:"AUTH_FAIL"})
    }
}

export const signUp = (formData)=> async(disptach)=>{
    try {
        disptach({type:"AUTH_START"})
        const {data} = AuthApi.signUp(formData)
        disptach({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(`Error from AuthAction.js logIn : ${error}`)
        disptach({type:"AUTH_FAIL"})
    }
}