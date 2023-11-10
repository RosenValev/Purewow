import { useState, useEffect } from 'react'
import styles from './RecipieList.module.css'
import RecipieListItem from '../RecipieListItem/RecipieListItem.jsx';

const baseURL = 'http://localhost:3000/recipies';

export default function RecipieList() {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, [])


    return (
        <div className={styles.container}>
            <h3>Choose recipie and start cooking.</h3>
            <div className={styles.recipies}>
                {recipies.map(recipie =>
                    <RecipieListItem key={recipie._id} {...recipie} />
                )}
            </div>
        </div>
    );
}