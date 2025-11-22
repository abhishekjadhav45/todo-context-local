import { useState } from "react";
import "./App.css";
import redfort from "./assets/redfort.jpg";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoggedIn(true);
  }

  return (
    <div className={loggedIn ? "flag-bg" : "login-bg"}>
      {!loggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="welcome-box">
          <h1>🇮🇳 Welcome to Bharat 🇮🇳</h1>
          <img src={redfort} className="fort-img" />
        </div>
      )}
    </div>
  );
}

export default App;
