import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js'
import { validateLoginData } from '../../utils/validationForm.js'

import * as userApi from '../../services/userApi.js'
import styles from './Auth.module.css'
import AuthContext from '../../contexts/authContext.jsx'

let initialFormValues = {
    username: "",
    password: "",
}

export default function Login() {
    const { formValues, setFormValues, onChangeHandler } = useForm(initialFormValues)
    const [errors, setErrors] = useState({});
    const { updateAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const resetFormHandler = () => {
        setFormValues(initialFormValues);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setErrors({});
            const validationErrors = validateLoginData(formValues)

            if (Object.keys(validationErrors).length > 0) {
                return setErrors(state => ({ ...state, validationErrors }));
            }

            const response = await userApi.login(formValues);

            if (response.username == formValues.username) {
                updateAuth(response);
                localStorage.setItem('token', response.token);
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
                        {errors.validationErrors?.username && (
                            <p className={styles.errorMessage} >{errors.validationErrors.username}</p>
                        )}
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
                        {errors.validationErrors?.password && (
                            <p className={styles.errorMessage} >{errors.validationErrors.password}</p>
                        )}
                        <div>
                            <button className={styles["login-reg-button"]} type="submit">Login</button>
                        </div>
                    </form>
                    <div>
                        <p> Don't have account? <Link to={"/register"}>Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}