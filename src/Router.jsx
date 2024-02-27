import { Routes, Route} from "react-router-dom" 
import  Home from './pages/Home'
import About from './pages/About' 
import Error from './pages/PageError'
import HousingCard from "./pages/HousingCard"

function Router(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingCard />} /> 
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  )
}
export default Router