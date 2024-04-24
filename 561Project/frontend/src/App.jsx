import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Entrees from "./pages/Entrees"
import MyCart from "./pages/MyCart"
import Deals from "./pages/Deals"
import Specialties from "./pages/Specialties"
import Home from "./pages/Home"
import About from "./pages/About"



function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}
function RegisterAndLogout() {   //When registering make sure all old access tokens are taken out
  localStorage.clear()
  return <Register />
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={             //Anyting Here can not be seen be users who are not logged in
            <ProtectedRoute>
              <Cart />             
            </ProtectedRoute>
          }
        />                
        <Route path="/login" element={<Login />} />    {/*Anything here is veiwable to all*/}
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/entrees" element={<Entrees />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />}></Route>   {/*Anything else will rediret to this page*/}
      </Routes>
    </BrowserRouter>
  )
}
export default App
