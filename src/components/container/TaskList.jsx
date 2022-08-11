import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/TaskComponent';

import "../../styles/task.scss"

const defaultTask = new Task("Prueba", "hola estoy probando", false, LEVELS.NORMAL);
const defaultTask2 = new Task("Prueba2", "hola estoy probando 2", true, LEVELS.URGENT);
const defaultTask3 = new Task("Prueba2", "hola estoy probando 2", false, LEVELS.BLOCKING);

export default function TaskList() {

  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  }, [tasks])


  function completeTask(task) {
    const tempTasks = [...tasks]
    const index = tasks.indexOf(task)
    tempTasks[index].completed = !tempTasks[index].completed
    setTasks(tempTasks)
  }

  function deleteTask(task) {
    const tempTasks = [...tasks]
    const index = tasks.indexOf(task)
    tempTasks.splice(index, 1)
    setTasks(tempTasks)
  }

  function addTask(task) {
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }


  let tasksList ;
  if(tasks.length>0){
    tasksList = (
      <table className='m-auto'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
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
  }else{
    tasksList=(
      <div>
        <h4>There are no tasks available</h4>
      </div>
    )
  }
  

  return (
    <div>
      <div className='col-12'>
        <div className="card">
          <div className="card-header p-3">
            <h3>Your tasks</h3>
          </div>
          <div className="card-body task-body" data-mdb-perfect-scrollbar='true'>
            {tasksList}
          </div>

        </div>

      </div>
      <TaskForm add={addTask} />
    </div>
  )
}
