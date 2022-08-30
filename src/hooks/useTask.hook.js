import { useEffect, useState } from 'react'
import { getTasksbyIdUser, deleteTaskById, saveTask, completeTaskById } from '../services/taskService'

export default function useTask(initialState = []) {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        setLoading(true)
        getTasksbyIdUser(user.id).then(data =>{
            setTasks(data)
            setLoading(false)
        })
    }, [user.id])



    async function completeTask(task) {
        const body = {
            name: task.name,
            description: task.description,
            completed: !task.completed,
            level: task.level
        }
        await completeTaskById(task._id, body)
        const tempTasks = [...tasks]
        const index = tasks.indexOf(task)
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    async function deleteTask(task) {
        await deleteTaskById(task._id)
        const tempTasks = [...tasks]
        const index = tasks.indexOf(task)
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    async function addTask(task) {
        const body = {
            name: task.name,
            description: task.description,
            completed: false,
            level: task.level
        }

        const addedTask = await saveTask(user.id, body)
        const tempTasks = [...tasks]
        tempTasks.push(addedTask)
        setTasks(tempTasks)
    }


    return { tasks, loading, addTask, completeTask, deleteTask}
}
