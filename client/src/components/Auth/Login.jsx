import styles from './Auth.module.css'
import { useState } from 'react'
import * as userApi from '../../services/userApi.js'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js'
import { useAuth } from '../../contexts/authContext.jsx'

let initialFormValues = {
    username: "",
    password: "",
}

export default function Login() {
    const { formValues, setFormValues, onChangeHandler } = useForm(initialFormValues)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { token, updateToken } = useAuth();

    const resetFormHandler = () => {
        setFormValues(initialFormValues);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await userApi.login(formValues);
            if (response.username == formValues.username) {
                updateToken(response.token)
                resetFormHandler();
                navigate('/');
            }
            if (!response.ok) {
                setErrors(state => ({ ...state, registerError: response.message }));
            }
        } catch (err) {
            console.log("Error: " + err.message)
        }
    };

    return (
        <>
            <div className={styles["login-register-div"]}>
                <div className={styles["login-register-box"]}>
                    <h2>Login</h2>

                    {errors.registerError && (
                        <p className={styles.errorMessage} >{errors.registerError}</p>
                    )}

                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formValues.username}
                                onChange={onChangeHandler}
                                placeholder="Enter your username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formValues.password}
                                onChange={onChangeHandler}
                                placeholder="Enter your password" />
                        </div>
                        <div>
                            <button className={styles["login-reg-button"]} type="submit">Login</button>
                        </div>
                    </form>
                    <div>
                        <p>Don't have account? <a href="#">Register</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}