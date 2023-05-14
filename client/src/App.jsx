import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

export default function App() {
  return (
    <div>
      <main>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}
