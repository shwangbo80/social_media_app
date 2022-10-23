import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Namu Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Namusocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
