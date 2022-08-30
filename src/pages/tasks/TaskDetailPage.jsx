import { getTaskById } from '../../services/taskService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = () => {

    const { id } = useParams()

    const [task, setTask] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTaskById(id).then(data=>{
            setTask(data)
        }).catch(error=>{
            setError(error.response.data.error);
        })
    },[id])

    if (task) {
        return <div className='text-center'>
            <h1>Task Detail</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    }
    return (
        <div className='text-center'>
            <h2>{error}</h2>
        </div>
    );
}

export default TaskDetailPage;
