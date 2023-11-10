import { Routes, Route } from "react-router-dom"
import Login from "./components/Auth/Login.jsx"
import Register from "./components/Auth/Register.jsx"
import RecipieDetails from "./components/Details/recipieDetails.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Navigation from "./components/Navbar/Navbar.jsx"
import RecipieList from "./components/RecipieList/RecipieList.jsx"

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/recipies" element={<RecipieList />} />
                <Route path="/recipies/:recipieId" element={<RecipieDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
