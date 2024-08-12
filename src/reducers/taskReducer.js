import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK, FILTER_TASKS } from '../actions/actions';

const initialState = {
    tasks: [],
    filter: 'all', // 'all', 'done', 'notDone'
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                ),
            };
        case FILTER_TASKS:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};
