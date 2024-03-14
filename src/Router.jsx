import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HousingPage from "./pages/HousingPage";
import PageError from "./pages/PageError";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}
export default Router;
