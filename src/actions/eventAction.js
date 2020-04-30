import axios from 'axios';
import * as TYPES from './types';
import { call, put } from 'redux-saga/effects';

const apiGetEventList = () => {
    return axios
        .get('http://192.168.0.102:3001/api')
        .then(response => response.data)
        .catch(err => err)
};

const apiCreateEvent = (data) => {
    return axios
        .post('http://192.168.0.102:3001/api', {
            eventType: data.eventType,
            eventName: data.eventName,
            date: data.date,
            place: data.place,
            additionalInfo: data.addInfo
        })
        .catch(err => err)
};

const apiEditEvent = (data) => {
    return axios
        .put('http://192.168.0.102:3001/api', {
            _id: data.id,
            eventType: data.eventType,
            eventName: data.eventName,
            date: data.date,
            place: data.place,
            additionalInfo: data.addInfo
        })
        .then(response => response.data)
        .catch(err => err)
};

const apiRemoveEvent = (data) => {
    return axios
        .put('http://192.168.0.102:3001/api' + data._id)
        .then(response => response.data)
        .catch(err => err)
};

export function* fetchGetEventList(action) {
    try {
        const eventList = yield call(apiGetEventList, action.page);
        yield put({ type: TYPES.GET_EVENTLIST_SUCCESS, payload: eventList })
    } catch (error) {
        yield put({ type: TYPES.GET_EVENTLIST_FAILURE, payload: error })
    }
}

export function* fetchCreateEvent(action) {
    try {
        const eventToCreate = yield call(apiCreateEvent, action);
        yield put({ type: TYPES.POST_EVENT_SUCCESS, payload: eventToCreate })
    } catch (error) {
        yield put({ type: TYPES.POST_EVENT_FAILURE, payload: error })
    }
}

export function* fetchEditEvent(action) {
    try {
        const eventToEdit = yield call(apiEditEvent, action);
        yield put({ type: TYPES.PUT_EVENT_SUCCESS, payload: eventToEdit })
    } catch (error) {
        yield put({ type: TYPES.PUT_EVENT_FAILURE, payload: error })
    }
}

export function* fetchRemoveEvent(action) {
    try {
        const eventToRemove = yield call(apiRemoveEvent, action);
        yield put({ type: TYPES.REMOVE_EVENT_SUCCESS, payload: eventToRemove })
    } catch (error) {
        yield put({ type: TYPES.REMOVE_EVENT_FAILURE, payload: error })
    }
}
