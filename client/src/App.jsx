import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import Dashboard from "./userNavigete/Dashboard"
import HomePage from "./userNavigete/HomePage"
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/SignUp" element={<SignUp />} ></Route>
        <Route path="/Dashboard" element={<Dashboard />} ></Route>
        <Route path="/Home" element={<HomePage />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
