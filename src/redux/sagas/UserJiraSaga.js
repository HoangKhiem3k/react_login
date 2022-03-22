import {delay, put, takeLatest,call} from 'redux-saga/effects';
import { jiraService } from "../../services/JiraService";
import { DISPLAY_LOADING, HIDE_LOADING, TOKEN, USER_LOGIN, USER_SIGNIN_API, USLOGIN } from "../../util/constants/settingSystem";
import {history} from '../../util/history'
// Quản lý các action saga

function * signinSaga(action) {
    console.log(action);
    yield delay(500);
    yield put({
        type: DISPLAY_LOADING,
    })
    // Goi api
    try {
        const {data} = yield call(() => jiraService.signinJira(action.userLogin) ) 
        // Lưu vào localStorage khi đăng nhập thành công
        localStorage.setItem(TOKEN,data.content.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content));

        yield put({
            type: USLOGIN,
            userLogin: data.content
        })
        // let history = yield select(state => state.HistoryReducer.history);
        history.push('/home');

    }catch (err) {
        console.log(err.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function * theoDoiSignin(){
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}