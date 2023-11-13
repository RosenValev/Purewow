const baseURL = 'http://localhost:3000/recipies';

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();
    return result
};

export const create = async (data) => {
    const response = await fetch(`${baseURL}/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    console.log(result)
    return result;
};
