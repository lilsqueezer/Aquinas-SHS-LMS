import React, { useState } from "react";
import Login from "./Login";
import Courses from "./Courses";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {!token ? (
        <Login onLogin={(newToken) => setToken(newToken)} />
      ) : (
        <Courses />
      )}
    </div>
  );
}

export default App;
