import { useEffect, useState } from "react";
import * as userService from "../services/userApi.js"
import Register from "../components/Register/Register.jsx"
import Login from "../components/Login/Login.jsx"



export default function Header() {
    const [user, setUser] = useState([]);
    const [showRegisterModal, setshowRegisterModal] = useState(false);
    const [showLoginModal, setshowLoginModal] = useState(false);

    const createUserClickHandler = () => {
        setshowRegisterModal(true);
    }

    const loginUserClickHandler = () => {
        setshowLoginModal(true);
    };

    const onUserCreateHandler = async (e) => {
        e.preventDefault();
        console.log('clicked')
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        await userService.create(data)
    }

    const onUserLoginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const loggedUser = await userService.login(data)
        setUser(loggedUser)
        console.log(loggedUser)

    }


    return (
        <header className="header-section">
            <div className="header-container">
                <nav className="nav-section">
                    <div className="logo">
                        <img src="./images/purewow-logo-black.webp" alt="logo" />
                    </div>
                    <div>
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Recipes</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Create recipe</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">My recipes</a>
                            </li>
                            <button className="button" onClick={loginUserClickHandler}>Login</button>
                            <button className="button" onClick={createUserClickHandler} >Register</button>
                            <button className="button" >Logout</button>
                        </ul>
                    </div>
                </nav>

                {showRegisterModal && (
                    <Register
                        onUserCreate={onUserCreateHandler}
                    />
                )}

                {showLoginModal && (
                    <Login
                        onUserLogin={onUserLoginHandler}
                    />
                )}

            </div>
        </header>
    )
};