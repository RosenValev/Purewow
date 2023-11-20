import { useState, useEffect } from 'react'
import styles from './RecipieList.module.css'
import RecipieListItem from '../RecipieListItem/RecipieListItem.jsx';
import * as recipieApi from '../../services/recipieApi.js'

export default function RecipieList() {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        recipieApi.getAll()
            .then(result => setRecipies(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.container}>
            <h3>Choose recipie, start and enjoy cooking.</h3>
            <div className={styles.recipies}>
                {recipies.map(recipie =>
                    <RecipieListItem key={recipie._id} {...recipie} />
                )}
            </div>
        </div>
    );
}