import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./components/Blog";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;