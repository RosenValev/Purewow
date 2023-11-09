import { Routes, Route } from "react-router-dom"
import Login from "./components/Auth/Login.jsx"
import Register from "./components/Auth/Register.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Navigation from "./components/Navbar/Navbar.jsx"
import Details from "./components/Details/Details.jsx"


function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Single recipie" element={<Details />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
