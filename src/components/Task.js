import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../actions/actions';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        if (newDescription.trim() === '') {
            alert('Description cannot be empty');
            return;
        }
        dispatch(editTask({ ...task, description: newDescription }));
        setIsEditing(false);
    };

    return (
        <div className={`task-item ${task.isDone ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.description}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleToggle}>
                        {task.isDone ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

export default Task;
