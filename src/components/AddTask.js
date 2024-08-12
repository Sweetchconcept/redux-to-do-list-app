import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/actions';

function AddTask() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') {
            alert('Task description cannot be empty');
            return;
        }

        const newTask = {
            id: Date.now(),
            description,
            isDone: false,
        };

        dispatch(addTask(newTask));
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="New Task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
