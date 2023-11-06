export default function Login() {
    return (
        <div className="login-register-div">
            <div className="login-register-box">
                <h2>Welcome</h2>
                <form method="POST">
                    <p>
                        <label>Username:</label>
                        <input type="text" name="username" placeholder="Enter your username" />
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Enter your password" />
                    </p>
                    <button className="login-reg-button" type="submit">Login</button>
                </form>
                <p>
                    Don't have account? <a href="/users/register">Register</a>
                </p>
            </div>

        </div>

    );
}