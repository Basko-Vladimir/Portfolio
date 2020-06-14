import  axios from 'axios';

export const api = {
    sendMessage (messageData) {
        return axios.post('http://localhost:3010/sendMessage', {...messageData})
    }
};