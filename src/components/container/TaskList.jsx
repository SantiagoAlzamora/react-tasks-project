import React, { useEffect } from 'react'
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/TaskComponent';

import "../../styles/task.scss"
import useTask from '../../hooks/useTask.hook';



export default function TaskList() {//{user}) {

  const { tasks, loading, addTask, completeTask, deleteTask} = useTask();
  const user = JSON.parse(localStorage.getItem('user')) || null

  useEffect(()=>{

  },[tasks])

  let tasksList;
  if (tasks.length > 0) {
    tasksList = (
      <table className='m-auto'>
        <thead>
          <tr className='task-table-head'>
            <th scope='col' className='task-content'>Title</th>
            <th scope='col' className='task-content'>Description</th>
            <th scope='col' className='task-content'>Priority</th>
            <th scope='col' className='task-content'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {tasks.map((task, index) => {
            return (
              <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask} />
            )
          })}
        </tbody>

      </table>
    )
  } else {
    tasksList = (
      <div>
        <h4>There are no tasks available</h4>
      </div>
    )
  }

  return (
    <div>
      <div className='col-12'>
        <div className="card">
          <div className="card-header p-3 ">
            {/* <h3>Your tasks - {obejectUser.email}</h3> */}
            <h3 className='text-center'>Tasks - {user.email}</h3>
          </div>
          <div className="card-body task-body text-center" data-mdb-perfect-scrollbar='true'>
            {
              loading ? (<span>Loading...</span>) : tasksList
            }
          </div>

        </div>

      </div>
      <TaskForm add={addTask} />
    </div>
  )
}
