import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import pageNotFound from "./pages/pageNotFound";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<pageNotFound/>}/>
      </Routes>
    </> 
  )
}

export default App
