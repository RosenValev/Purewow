export default function Login() {
    return (
        <div className="login-register-div">
            <div className="login-register-box">
                <h2>Welcome</h2>
                <form >
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div>
                        <button className="login-reg-button" type="submit">Login</button>
                    </div>
                </form>
                <div>
                    <p>Don't have account? <a href="#">Register</a></p>
                </div>
            </div>

        </div>

    );
}