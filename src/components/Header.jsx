export default function Header() {
    return (
        <header className="header-section">
            <div className="container">
                <nav className="nav-section">
                    <div className="logo">
                        <img src="./images/purewow-logo-black.webp" alt="logo" />
                    </div>
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
                </nav>
            </div>
        </header>
    )
};