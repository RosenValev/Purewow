import { useEffect, useState } from "react";
import * as userService from "../services/userAPI.js"


export default function Header() {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err));
    }, []);



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
                            <button className="button">Login</button>
                            <button className="button">Register</button>
                            <button className="button">Logout</button>
                        </ul>
                    </div>
                </nav>


            </div>
        </header>
    )
};