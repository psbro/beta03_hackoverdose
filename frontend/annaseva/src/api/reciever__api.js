import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/receiver' })

export const fetchdata = () => API.get('/all');
export const createdata = (newdata) => API.post('/create' , newdata)
export const updateData = () => API.put('/update')