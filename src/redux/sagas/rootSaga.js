import {all} from 'redux-saga/effects';
import * as Jira from './UserJiraSaga'

export function * rootSaga(){
    yield all([
        //Nghiệp vụ theo dõi action saga
        Jira.theoDoiSignin()
    ])
}