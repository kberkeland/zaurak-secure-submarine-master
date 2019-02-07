import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* getReturnUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/returnusers', config);
    
    yield put({ type: 'SET_RETURNUSERS', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* returnUsersSaga() {
  yield takeLatest('GET_RETURNUSERS', getReturnUsers);
}

export default returnUsersSaga;