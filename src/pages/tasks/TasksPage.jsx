import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../../components/container/TaskList';

const TasksPage = () => {

    const navigate = useNavigate();
    const user=localStorage.getItem('user');

    useEffect(() => {
      if(!user){
        navigate("/")
      }
    })
    

    return (

        <div>
            <TaskList user={user}></TaskList>
        </div>
    );
}

export default TasksPage;
