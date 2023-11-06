import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />

            <Home />

            <Footer />
        </>
    )
}

export default App
