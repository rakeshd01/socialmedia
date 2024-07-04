import * as actionTypes from './actionTypes';
import axios from 'axios';
import {UserIdURL} from "../constants";

const userId = (data) => {
    return {
        type: actionTypes.USER_ID,
        user: data
    }
};

export const fetchUser = () => {
    return dispatch => {
        axios.defaults.headers = {
            Authorization: `Token ${localStorage.getItem("token")}`
        };
        axios.get(UserIdURL)
            .then(res => {
                console.log(res.data);
                dispatch(userId(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
};