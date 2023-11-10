const baseURL = 'http://localhost:3000/recipies';

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();
    return result
};