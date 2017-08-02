import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};

export const addFriend = (friendData) => {
    const promise = axios.post('http://localhost:5000/new-friend', friendData);
    return {
        type: ADD_FRIEND,
        payload: promise
    };
};