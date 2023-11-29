import * as request from './requester.js'
import { usersEndpoints } from "./endpoints.js";

// const baseURL = 'http://localhost:3000/users';

// export const getAll = async () => {
//     const response = await fetch(baseURL);
//     const result = await response.json();
//     return result
// };

export const getAll = async () => {
    const result = await request.get(usersEndpoints.getAll);
    return result;
}

// export const getOne = async (userId) => {
//     const response = await fetch(`${baseURL}/${userId}`);
//     const result = await response.json();
//     return result;
// };

export const getOne = async (id) => {
    const result = await request.get(usersEndpoints.getOne(id));
    return result;
}

// export const create = async (data) => {
//     const response = await fetch(`${baseURL}/register`, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(data)
//     })
//     const result = await response.json();
//     console.log(result)
//     return result;
// };

export const create = async (data) => {
    const result = await request.post(usersEndpoints.create, data);
    return result;
}

// export const login = async (data) => {
//     const response = await fetch(`${baseURL}/login`, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(data),
//         credentials: 'include'
//     })
//     const result = await response.json();
//     return result;
// }

export const login = async (data) => {
    const result = await request.post(usersEndpoints.login, data);
    return result;
}

// export const logout = async () => {
//     const response = await fetch(`${baseURL}/logout`, {
//         method: 'POST',
//     })
//     const result = await response.json();
//     return result;
// }

export const logout = async () => {
    const result = await request.post(usersEndpoints.logout);
    return result;
}