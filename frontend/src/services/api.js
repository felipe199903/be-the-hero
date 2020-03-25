import aixios from 'axios';

const api = aixios.create({
    baseURL: 'http://localhost:3333',
})

export default api;