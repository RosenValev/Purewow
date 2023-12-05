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
import AuthGuard from "./components/AuthGuard/AuthGuard.jsx"
import PageNotFound from "./components/PageNotFound/404.jsx"

function App() {
    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipies" element={<RecipieList />} />
                <Route path="/recipies/:id" element={<DetailsRecipie />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<AuthGuard />}>
                    <Route path="/create-recipie" element={<CreateRecipie />} />
                    <Route path="/recipies/edit/:id" element={<EditRecipie />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="/404" element={<PageNotFound />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            <Footer />
        </AuthProvider>
    )
}
export default App;