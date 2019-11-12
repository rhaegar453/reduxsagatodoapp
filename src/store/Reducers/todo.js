import * as actions from '../ActionTypes/todo';

const initialState = {
    todos: [],
    loading: false,
    error: false,
    selectedTodo: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_TODO_START:
            return { ...state, loading: true };
        case actions.CREATE_TODO_SUCCESS:
            return { ...state, loading: false, todos: [...state.todos, action.payload] };
        case actions.CREATE_TODO_FAILURE:
            return { ...state, loading: false, error: true }
        case actions.DELETE_TODO_START:
            return { ...state, loading: true };
        case actions.DELETE_TODO_SUCCESS:
            return { ...state, loading: false, todo: state.todos.filter(item => item.id != action.payload) }
        case actions.DELETE_TODO_FAILURE:
            return { ...state, loading: false, error: true };
        case actions.UPDATE_TODO_START:
            return { ...state, loading: true }
        case actions.UPDATE_TODO_SUCCESS:
            return {
                ...state, loading: false, todo: state.todo.map(item => {
                    if (item.id == action.payload.id) {
                        return action.payload
                    }
                    else return item;
                })
            }
        case actions.UPDATE_TODO_FAILURE:
            return { ...state, loading: false, error: false }
        case actions.GET_TODOS_START:
            return { ...state, loading: true };
        case actions.GET_TODOS_SUCCESS:
            return { ...state, loading: false, todo: action.payload }
        case actions.GET_TODOS_FAILURE:
            return { ...state, loading: false, error: true }

        case actions.SUCCESS_NOTIFICATION:
            return state;

        case actions.FAILURE_NOTIFICATION:
            return state;
        default:
            return {...state};
    }
}


export default reducer;