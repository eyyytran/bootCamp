import React, { useState } from 'react'
import Todo from './Todo'

export default function MainContent() {
    const [task, setTask] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = e => {
        setTask(e.target.value)
    }

    const addTask = () => {
        const newTask = task
        setTodoList([...todoList, newTask])
        setTask('')
    }

    const deleteTask = taskToDelete => {
        setTodoList(
            todoList.filter(task => {
                return task !== taskToDelete
            })
        )
    }
    return (
        <div className='main-content'>
            <h3>To-Do List</h3>
            <div className='input-container'>
                <input
                    type='text'
                    placeholder='text'
                    value={task}
                    onChange={handleChange}
                ></input>
                <button type='submit' onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div className='todo-list'>
                {todoList.map((task, key) => {
                    return (
                        <Todo task={task} key={key} deleteTask={deleteTask} />
                    )
                })}
            </div>
        </div>
    )
}
