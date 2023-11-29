import * as request from './requester.js'
import { recipiesEndpoints } from './endpoints.js';

// const baseURL = 'http://localhost:3000/recipies';

export const getAll = async () => {
    const result = await request.get(recipiesEndpoints.getAll)
    return result
};


export const getLastThree = async () => {
    const result = await request.get(recipiesEndpoints.getLastThree);
    return result;
}

// export const getOne = async (id) => {
//     const response = await fetch(`${baseURL}/${id}`);
//     if (!response.ok) {
//         throw new Error('Not found')
//     }
//     const result = await response.json();
//     console.log(result)
//     return result;
// }

export const getOne = async (id) => {
    const result = await request.get(recipiesEndpoints.getOne(id));
    return result;
}

// export const create = async (data) => {
//     const response = await fetch(`${baseURL}/create`, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(data)
//     })
//     const result = await response.json();
//     return result;
// };

export const create = async (data) => {
    const result = await request.post(recipiesEndpoints.create, data)
    return result;
}

// export const deleteOne = async (id) => {
//     const response = await fetch(`${baseURL}/${id}/delete`, {
//         method: 'DELETE'
//     });
//     const result = await response.json()
//     return result
// }

export const deleteOne = async (id) => {
    const result = await request.del(recipiesEndpoints.deleteOne(id));
    return result;
}

// export const updateOne = async (id, recipie) => {
//     const response = await fetch(`${baseURL}/${id}/edit`, {
//         method: 'PATCH',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(recipie)
//     });
//     const result = await response.json()
//     return result
// }

export const updateOne = async (id, recipie) => {
    const result = await request.patch(recipiesEndpoints.updateOne(id), recipie);
    return result;
}

// export const addCommentToRecipie = async (id, { username, comment }) => {
//     const response = await fetch(`${baseURL}/${id}/add-comment`, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify({ username, comment })
//     });
//     const result = await response.json()
//     return result
// }

export const addCommentToRecipie = async (id, { username, comment }) => {
    const result = await request.post(recipiesEndpoints.addCommentToRecipie(id), { username, comment })
    return result;
}
