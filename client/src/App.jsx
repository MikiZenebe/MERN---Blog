import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  CreateBlog,
  DetailPage,
  Home,
  Login,
  Signup,
  UpdateBlog,
} from "./pages";

export default function App() {
  return (
    <div>
      <main>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route exact path="/post/:id" element={<DetailPage />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      </main>
    </div>
  );
}
