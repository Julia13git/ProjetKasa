import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HousingCard from "./pages/HousingCard";
import PageError from "./pages/PageError";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingCard />} />
        <Route path="*" element={<PageError />} />
        <Route path="/error" element={<PageError />} />
      </Routes>
    </>
  );
}
export default Router;
