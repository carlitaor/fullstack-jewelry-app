import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/ping")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching /ping:", err));
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>API says: {message}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
      </div>
    </>
  );
}

export default App;
