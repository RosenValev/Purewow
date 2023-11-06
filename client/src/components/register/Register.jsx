export default function Register() {
    return (
        <div className="login-register-div">
            <div className="login-register-box">
                <h2>Welcome</h2>
                <form method="POST">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Username" />

                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" />

                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" />

                    <label>Repeat password:</label>
                    <input type="password" name="repeatPassword" placeholder="Repeat Password" />

                    <button className="login-reg-button" type="submit">Register</button>
                </form>
                <p>
                    Have an account? <a href="/users/login">LogIn</a>
                </p>
            </div>
        </div>
    );
}