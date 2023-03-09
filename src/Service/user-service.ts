import axios from 'axios';

const apiUrl = 'https://api.github.com';

// em caso de 403 por muitas requisições
//const accessToken = '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';

/*const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})*/

export function findByLogin(login: string){
    return axios.get(`https://api.github.com/users/${login}`);
}