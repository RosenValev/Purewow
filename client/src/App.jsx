import './App.css'
import { Routes, Route } from "react-router-dom"

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import RecipieDetails from './components/RecipieDetails/RecipieDetails.jsx'

function App() {

    return (
        <>
            <Header />
            <Home />
            <RecipieDetails />
            <Footer />
        </>
    )
}

export default App
