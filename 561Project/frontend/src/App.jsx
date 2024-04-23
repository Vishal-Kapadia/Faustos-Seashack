import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

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
              <Home />             
            </ProtectedRoute>
          }
        />                
        <Route path="/login" element={<Login />} />    {/*Anything here is veiwable to all*/}
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>   {/*Anything else will rediret to this page*/}
      </Routes>
    </BrowserRouter>
  )
}
export default App
