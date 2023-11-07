import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import RecipieDetails from './components/RecipieDetails/RecipieDetails.jsx'

function App() {
    const [count, setCount] = useState(0)

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
