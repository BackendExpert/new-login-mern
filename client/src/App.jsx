import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/SignUp" element={<SignUp />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
