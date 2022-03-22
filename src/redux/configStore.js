import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'
import { HistoryReducer } from './reducers/HistoryReducer';
import { UserLoginJiraReducer } from './reducers/UserJiraReducer';
//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    // LoadingReducer,
    HistoryReducer,
    UserLoginJiraReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;