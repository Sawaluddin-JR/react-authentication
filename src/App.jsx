import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();
  }, []);

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="mt-10 mx-auto max-w-md">
          <Routes>
            <Route path="/" exact Component={() => <Home name={name} />} />
            <Route
              path="/login"
              Component={() => <Login setName={setName} />}
            />
            <Route path="/register" Component={Register} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
