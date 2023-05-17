import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { CreateBlog, DetailPage, Home, Login, Signup, Setting } from "./pages";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
  const { user } = useContext(Context);

  return (
    <div>
      <main>
        <Toaster />
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/post/:id" element={<DetailPage />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />

          <Route path="/signup" element={user ? <Home /> : <Signup />} />

          <Route path="/write" element={user ? <CreateBlog /> : <Signup />} />

          <Route path="/settings" element={user ? <Setting /> : <Signup />} />
        </Routes>
      </main>
    </div>
  );
}
