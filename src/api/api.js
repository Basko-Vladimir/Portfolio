import  axios from 'axios';

export const api = {
    sendMessage (messageData) {
        return axios.post('https://portfolio-server-smtp-nodejs.herokuapp.com/sendMessage', {...messageData})
    }
};