import styles from './Auth.module.css'
import { useState } from 'react'
import * as userApi from '../../services/userApi.js'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js'

let formInitialState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
};

export default function Register() {
    const { formValues, setFormValues, onChangeHandler } = useForm(formInitialState)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await userApi.create(formValues);
            if (response.username == formValues.username) {
                resetFormHandler();
                navigate('/home');
            }
            if (!response.ok) {
                setErrors(state => ({ ...state, registerError: response.message }));
            }
        } catch (err) {
            console.log("Error: " + err.message);
        }
    };

    return (
        <div className={styles["login-register-div"]}>
            <div className={styles["login-register-box"]} >
                <h2>Register</h2>

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
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formValues.email}
                            onChange={onChangeHandler}
                            placeholder="Enter your email" />
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
                        <label htmlFor="repeatPassword">Repeat password:</label>
                        <input
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={formValues.repeatPassword}
                            onChange={onChangeHandler}
                            placeholder="Repeat password" />
                    </div>
                    <div>
                        <button className={styles["login-reg-button"]} type="submit" >Register</button>
                    </div>
                </form>
                <div>
                    <p>  Have an account? <a href="#">Login</a></p>
                </div>
            </div>
        </div >
    );
}