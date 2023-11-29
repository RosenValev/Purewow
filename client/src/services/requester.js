const BASE_URL = 'http://localhost:3000';

async function request(method, url, data) {

    const options = {
        method,
        headers: {},
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('token')

    if (token) {
        options.headers['Auth'] = token
    }

    try {
        const response = await fetch(BASE_URL + url, options);
        if (!response.ok) {
            if (response.status === 403) {
                localStorage.removeItem('token');
                // navigate('/login');  //TODO different aproach
            }
            const error = await response.json();
            return error;
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const patch = request.bind(null, 'PATCH');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');