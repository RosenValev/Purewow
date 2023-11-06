const baseURL = 'http://localhost:3000/users/';

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    return result
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseURL}/${userId}`);
    const result = await response.json();
    return result;
};