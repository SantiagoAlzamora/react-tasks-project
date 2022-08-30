import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import { useState } from 'react'

function TaskForm({ add }) {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)
    const [creating, setCreating] = useState(false)
    

    function addTask(e) {
        e.preventDefault();
        const newTask = {
            name: nameRef.current.value,
            description :descriptionRef.current.value,
            completed: false,
            level: levelRef.current.value

        };
        setCreating(true)
        setTimeout(()=>{
            setCreating(false)
            add(newTask)
            e.target.reset()
        },1000)
        
        
    }

    return (
        <form action="" onSubmit={addTask} className="d-flex justify-content-center align-items-center m-2">
            <div className="form-outline flex-fill">
                <input type="text" ref={nameRef} id="inputName" placeholder='Name...' className='form-control form-control-lg' required autoFocus />
                <input type="text" ref={descriptionRef} id="inputDescription" placeholder='Description...' className='form-control form-control-lg' required />
                    <select id="selectLevel" ref={levelRef} defaultValue={LEVELS.NORMAL} className='form-control form-control-lg'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </select>
                    
                
                <button type='submit' className='btn btn-success btn-lg m-2'>Add task</button>
                {creating && (<span>Creando...</span>)}
            </div>

        </form>
    )
}

// TaskForm.propTypes = {
//     add: PropTypes.func.isRequired
// }

export default TaskForm
