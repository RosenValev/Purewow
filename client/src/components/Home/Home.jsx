import { useState, useEffect, useContext } from 'react'

import styles from './Home.module.css'
import * as recipieApi from '../../services/recipieApi.js'

import RecipieListItem from '../RecipieListItem/RecipieListItem.jsx'
import AuthContext from '../../contexts/authContext.jsx'

export default function Home() {
    const [lastThreeRecipies, setLastThreeRecipies] = useState([])

    useEffect(() => {
        recipieApi.getLastThree()
            .then(result => setLastThreeRecipies(result))
            .catch(err => console.log(err))
    }, [])

    const { isAuthenticated, username} = useContext(AuthContext);
    console.log(isAuthenticated)
    console.log(username)

    return (
        <div className={styles.main}>
            <div className={styles.home}>

                <div className={styles.info}>
                    <h1>Let's Get Cooking!</h1>
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
                </div>
                <div className={styles.container}>
                    <h2>Take a look at our latest recipies added by our customers</h2>
                    <div className={styles.recipies}>
                        {lastThreeRecipies.map(recipie =>
                            <RecipieListItem key={recipie._id} {...recipie} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}