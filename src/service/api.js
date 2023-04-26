import axios from 'axios';

const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const api = {
    get: (word) => axios.get(apiUrl.concat(word))
}

export default api

