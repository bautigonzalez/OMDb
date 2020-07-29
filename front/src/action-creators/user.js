import axios from "axios"
import { LOGUEADO, DESLOGUEADO, VIEW_USUARIOS } from "../constants"

const logueado = function(username){
    return {
        type : LOGUEADO,
        username
    }
}

const deslogueado = function(){
    return {
        type : DESLOGUEADO,
        username : {}
    }
}

const setUsuarios = function(usuarios){
    return {
        type: VIEW_USUARIOS,
        usuarios
    }
}

export const logueandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/login", {username, password})
        .then(res=>dispatch(logueado(res.data)))
    }
} 

export const registrandome = function(username, password){
    return (dispatch)=>{
        return axios.post("/api/register", {username, password})
        .then(res=>dispatch(logueado(res.data)))
    }
}

export const deslogueandome = function(){
    return (dispatch)=>{
        return axios.get("/api/logout")
        .then(()=>dispatch(deslogueado()))
    }
}

export const fetchUsuarios = function(){
    return function (dispatch, getState) {
        axios.get(`/api/users`)
          .then(res => {
            dispatch(setUsuarios(res.data));
          });
      };
}
