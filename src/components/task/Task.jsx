import React from 'react'
import "./Task.css"
function Task(props) {
    
    return (
        <div className='task'
              style={{ textDecoration: props.task.completed ? "line-through" : "" }}>
              {props.task.title}
              {/* onClick= (item)=> !item */}
            <button className='btn-red' onClick={() => props.removeTask(props.index)}>x</button>
            <button className='btn-blue' onClick={() => props.completeTask(props.index)}>completed</button>
        </div>
    )
}

export default Task