import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as userApi from '../../services/userApi.js'

import AuthContext from "../../contexts/authContext.jsx";

export default function Logout() {
    const { updateAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        userApi.logout()
            .then(result => {
                if (result.success) {
                    updateAuth({});
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }, [])

    return null
}