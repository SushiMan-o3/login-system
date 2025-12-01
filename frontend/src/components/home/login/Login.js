// home/login/Login.js
import LoginForm from "./LoginForm";
import api from "../../../api";

export default function Login() {
  const handleLogin = async ({ email, password }) => {
    try {
      await api.post("/login", { email, password });
      console.log("User logged in!");
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  };

  return (
    <div className="login-full-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
// home/login/Login.js
import LoginForm from "./LoginForm";
import api from "../../../api";

export default function Login() {
  const handleLogin = async ({ email, password }) => {
    try {
      await api.post("/login", { email, password });
      console.log("User logged in!");
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  };

  return (
    <div className="login-full-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
