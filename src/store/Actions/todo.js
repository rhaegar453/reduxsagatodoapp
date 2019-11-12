import * as actions from '../ActionTypes/todo';


export const createTodoStart=()=>({type:actions.CREATE_TODO_START});
export const createTodo=()=>({type:actions.CREATE_TODO});
export const createTodoSuccess=()=>({type:actions.CREATE_TODO_SUCCESS});
export const createTodoFailure=()=>({type:actions.CREATE_TODO_FAILURE});

export const updateTodo=()=>({type:actions.UPDATE_TODO});
export const updateTodoStart=()=>({type:actions.UPDATE_TODO_START});
export const updateTodoSuccess=()=>({type:actions.UPDATE_TODO_SUCCESS});
export const updateTodoFailure=()=>({type:actions.UPDATE_TODO_FAILURE});

export const deleteTodo=()=>({type:actions.DELETE_TODO});
export const deleteTodoStart=()=>({type:actions.DELETE_TODO_START});
export const deleteTodoSuccess=()=>({type:actions.DELETE_TODO_SUCCESS});
export const deleteTodoFailure=()=>({type:actions.DELETE_TODO_FAILURE});

export const getTodos=()=>({type:actions.GET_TODOS});
export const getTodosStart=()=>({type:actions.GET_TODOS_START});
export const getTodosSuccess=()=>({type:actions.GET_TODOS_SUCCESS});
export const getTodosFailure=()=>({type:actions.GET_TODOS_FAILURE});


export const successNotification=()=>({type:actions.SUCCESS_NOTIFICATION});
export const failureNotification=()=>({type:actions.FAILURE_NOTIFICATION});


