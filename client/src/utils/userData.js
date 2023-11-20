import { useAuth } from '../contexts/authContext.jsx'

export const loggedUser = (data) => {
    const { token } = useAuth();
    let loggedUserData = {};

    if (token) {
        loggedUserData = {
            _id: data.id,
            username: data.username,
            email: data.email,
        }
    }

    return loggedUserData
}