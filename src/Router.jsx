import { Routes, Route} from "react-router-dom" 
import  Home from './pages/Home'
//import About from './pages/About' 

function Router(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/housing/:id" element={<About />} /> */}
      </Routes>
    </>
  )
}
export default Router