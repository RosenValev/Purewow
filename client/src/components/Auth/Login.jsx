import styles from './Auth.module.css'
import { useState } from 'react'
import * as userApi from '../../services/userApi.js'
import { useNavigate } from 'react-router-dom'

let formInitialState = {
    username: "",
    password: "",
};

export default function Login() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        let value = e.target.value;
        setFormValues(state => ({ ...state, [e.target.name]: value }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await userApi.login(formValues);
        if (!response.ok) {
            setErrors(state => ({ ...state, registerError: response.message }));
        }
        if (response.username == formValues.username) {
            localStorage.setItem('token', response.token)
            resetFormHandler();
            navigate('/home');
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
                                onChange={changeHandler}
                                placeholder="Enter your username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formValues.password}
                                onChange={changeHandler}
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