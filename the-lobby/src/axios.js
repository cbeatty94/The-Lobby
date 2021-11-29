import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://group-up-backend1.herokuapp.com'
})

export default instance;