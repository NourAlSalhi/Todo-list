import React from 'react'
import Task from '../../components/task/Task'
import CreateTask from '../../components/createTask/CreateTask'
import { useState, useEffect } from 'react'
//style
import "./Todo.css"

const Todo = () => {
    const [tasksRemaining, setTasksRemaining] = useState(0)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    const addTask = (title) => {
        const newTask = [...tasks, { title, completed: false }]
        setTasks(newTask)
    }

    const completeTask = (index) => {
        const newTask = [...tasks];
        newTask[index].completed = true;
        setTasks(newTask);
    }
    const removeTask = (index) => {
        if (tasks.length > 1){
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
        }
    }


    const RemoveItem = e => {
        setTasks([])
    }

    // onKeyDown={(e) => {
    //     if (e.keyCode === 13) onAdd(); //13 code for enter when enter the task already add to list of task as you clicl add
    // }}

    return (
        <div class="todo-container">
            <div class='header'>Todo-Items</div>
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className='tasks'>
                {
                    tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            RemoveItem={RemoveItem}
                        />
                    ))
                }
            </div>
            <div className='create-task'>
                <CreateTask addTask={addTask} />
            </div>
            <button onClick={RemoveItem}>remove</button>
        </div>
    )
}

export default Todo
