import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    const friendsEndpoint = 'http://localhost:5000/friends'; 
    const friends = axios.get(friendsEndpoint);
    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};

export const addFriend = (obj) => {
    const friendsEndpoint = 'http://localhost:5000/new-friend'; 
    const friends = axios.post(friendsEndpoint, obj);
    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};

export const removeFriend = (index) => {
    const friendsEndpoint = 'http://localhost:5000/delete-friend';
    const friends = axios({
        method: 'delete',
        url: friendsEndpoint,
        data: { index }
    });
    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};
