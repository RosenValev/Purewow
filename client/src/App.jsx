import { Routes, Route } from "react-router-dom"
import { AuthProvider } from './contexts/authContext.jsx'

import Navigation from "./components/Navbar/Navbar.jsx"
import Home from "./components/Home/Home.jsx"
import RecipieList from "./components/RecipieList/RecipieList.jsx"
import CreateRecipie from "./components/CreateRecipie/CreateRecipie.jsx"
import DetailsRecipie from "./components/Details/DetailsRecipie.jsx"
import EditRecipie from "./components/Edit/EditRecipie.jsx"
import MyProfile from "./components/MyProfile/MyProfile.jsx"
import Login from "./components/Auth/Login.jsx"
import Register from "./components/Auth/Register.jsx"
import Logout from "./components/Logout/Logout.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
    return (
        <AuthProvider>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipies" element={<RecipieList />} />
                    <Route path="/create-recipie" element={<CreateRecipie />} />
                    <Route path="/recipies/edit/:id" element={<EditRecipie />} />
                    <Route path="/recipies/:id" element={<DetailsRecipie />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
                <Footer />
            </>
        </AuthProvider>
    )
}

export default App
