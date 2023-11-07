export default function Register({
    onUserCreate,
}

) {
    return (
        <div className="login-register-div">
            <div className="login-register-box">
                <h2>Welcome</h2>
                <form onSubmit={onUserCreate} >
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat password:</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat password" />
                    </div>
                    <div>
                        <button className="login-reg-button" type="submit" >Register</button>
                    </div>
                </form>
                <div>
                    <p>  Have an account? <a href="#">Login</a></p>
                </div>
            </div>
        </div>
    );
}