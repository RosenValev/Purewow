export const recipiesEndpoints = {
    getAll: '/recipies',
    getLastThree: '/recipies/last-three',
    create: '/recipies/create',
    getOne: (id) => `/recipies/${id}`,
    deleteOne: (id) => `/recipies/${id}/delete`,
    updateOne: (id) => `/recipies/${id}/edit`,
    addCommentToRecipie: (id) => `/recipies/${id}/add-comment`,
}