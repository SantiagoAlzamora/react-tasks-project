import axios from 'axios'
import { API_URL } from '../api'

const config = {
    headers: {
        'auth-token': JSON.parse(localStorage.getItem('token')),
        'Content-Type': 'application/json'
    }
}

export const getTasksbyIdUser= async (idUser)=>{
    let res = await axios.get(`${API_URL}/tasks/${idUser}`,config)
    return res.data
}

export const deleteTaskById = async (id)=>{
    await axios.delete(`${API_URL}/tasks/${id}`,config)
}

export const saveTask = async (idUser,body)=>{
    let res = await axios.post(`${API_URL}/tasks/${idUser}`, body,config)
    let savedTask = res.data
    return savedTask
}

export const completeTaskById= async (id,body) =>{
    await axios.put(`${API_URL}/tasks/${id}`, body, config)
}

export const getTaskById = async(id)=>{
    let res = await axios.get(`${API_URL}/tasks/task/${id}`,config)
    return res.data
}
