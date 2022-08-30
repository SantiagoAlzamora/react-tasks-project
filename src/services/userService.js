import axios from 'axios'
import { API_URL } from '../api'

export const loginUser= async(values)=>{
    return await axios.post(`${API_URL}/users/login`, values)
}

export const registerUser = async(values)=>{
    await axios.post(`${API_URL}/users/register`, values)
}