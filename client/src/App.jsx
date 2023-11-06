import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/login/Login.jsx'
import RecipieDetails from './components/RecipieDetails/RecipieDetails.jsx'
import Register from './components/register/Register.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Home />
            <Login />
            <Register />
            <RecipieDetails />
            <Footer />
        </>
    )
}

export default App
