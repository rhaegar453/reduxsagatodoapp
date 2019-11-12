import {put,takeEvery, all} from 'redux-saga/effects';
import * as actions from '../ActionTypes/todo';
import * as allActions from '../Actions/todo';
import axios from 'axios';

const url='http://localhost:4000/';


function* createTodo({title, description, createdat}){
    try{
        yield put(allActions.createTodoStart());
        let response=yield axios.post(url+'todos', {title, description, createdat});
        yield put(allActions.successNotification());
        yield put(allActions.createTodoSuccess({title, description, createdat, id:response.id}));
    }
    catch(err){
        yield put(allActions.createTodoFailure());
    }
}


function* updateTodo({id, title, description,createdat}){
    try{
        yield put(allActions.updateTodoStart());
        let response=yield axios.put(url+`todos/${id}`, {title, description, createdat,id});
        yield put(allActions.successNotification());
        yield put(allActions.updateTodoSuccess({title, description, createdat, id:response.id}));
    }
    catch(err){
        yield put(allActions.updateTodoFailure());
    }
}


function* deleteTodo({id}){
    try{
        yield put(allActions.deleteTodoStart());
        yield axios.delete(url+`todos/${id}`);
        yield put(allActions.successNotification());
        yield put(allActions.deleteTodoSuccess({id}));
    }
    catch(err){
        yield put(allActions.deleteTodoFailure());
    }
}

function* getTodo(){
    try{
        yield put(allActions.getTodosStart());
        let response=yield axios.get(url+'todos');
        yield put(allActions.successNotification());
        yield put(allActions.getTodosSuccess());
    }
    catch(err){
        yield put(allActions.getTodosFailure());
    }
}



function* watchActions(){
    yield takeEvery(actions.CREATE_TODO, createTodo);
    yield takeEvery(actions.UPDATE_TODO,updateTodo);
    yield takeEvery(actions.DELETE_TODO, deleteTodo);
    yield takeEvery(actions.GET_TODOS, getTodo)
}

export default function* rootSaga(){
    yield all([
        watchActions()
    ])
}


    
