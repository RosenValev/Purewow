export const recipiesEndpoints = {
    getAll: '/recipies',
    getLastThree: '/recipies/last-three',
    create: '/recipies/create',
    getOne: (id) => `/recipies/${id}`,
    deleteOne: (id) => `/recipies/${id}/delete`,
    updateOne: (id) => `/recipies/${id}/edit`,
    addCommentToRecipie: (id) => `/recipies/${id}/add-comment`,
}

export const usersEndpoints = {
    getOne: (id) => `/users/${id}`,
    getAll: '/users',
    create: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
}