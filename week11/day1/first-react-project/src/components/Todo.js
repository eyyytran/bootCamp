import React from 'react'

export default function Todo({ task, deleteTask }) {
    const handleDelete = () => {
        deleteTask(task)
    }

    return (
        <div className='todo'>
            <div className='content'>
                <span>{task}</span>
            </div>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}
