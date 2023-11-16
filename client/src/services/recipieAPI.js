const baseURL = 'http://localhost:3000/recipies';

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();
    console.log(result)
    return result
};


export const lastThree = async () => {
    const response = await fetch(`${baseURL}/last`);
    const result = await response.json();
    console.log(result);
    return result;
}

export const getOne = async (id) => {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
        throw new Error('Not found')
    }
    const result = await response.json();
    return result;
}

export const create = async (data) => {
    const response = await fetch(`${baseURL}/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result;
};
