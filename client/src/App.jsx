import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            
            <main className="main-section">
                <div>
                    <img src="./images/what-is-hot-pot_universal.webp" alt="delicious" />
                </div>
                <div>
                    <h1>Let's Get Cooking!</h1>
                    <h2>
                        <p>
                            At PureWow, we're passionate about the art of cooking and the joy of
                            sharing delicious meals.
                        </p>
                        <p>
                            Whether you're a seasoned chef or just starting your culinary journey,
                            you're in for a treat!
                        </p>
                        <p>
                            Explore our collection of mouthwatering recipes, culinary tips, and
                            food adventures that will inspire your inner foodie.
                        </p>
                        <p>
                            Ready to transform your kitchen into a heaven of flavors? Start
                            exploring our recipes and cooking guides today.
                        </p>
                        <p>
                            Unleash your creativity, savor the aromas, and enjoy the magic of
                            cooking.
                        </p>
                    </h2>
                </div>
            </main>
            <footer>
                <p>Defence project</p>
            </footer>
        </>
    )
}

export default App
