import axios from 'axios';
const KEY = 'AIzaSyDM_F3VJLjqL5_BZK384LOKZbe0zvDQ8NU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})