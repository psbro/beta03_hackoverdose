import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8000/users' })


export const createdata__create = (newdata) => API.post('/create' , newdata)
export const createdata__login = (newdata) => API.post('/login' , newdata)
