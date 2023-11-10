import styles from './RecipieDetails.module.css'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const baseURL = "http://localhost:3000/recipies"


export default function RecipieDetails() {
    const { recipieId } = useParams();
    const [recipie, setRecipie] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/recipies/654d02d8e577ee46929f7b54`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setRecipie)
            .catch((err) => {
                navigate('/recipies');
            });
    }, [recipieId]);

    return (
        <div className={styles['recipie-container']}>
            <div className={styles["recipe-details"]}>
                <div className={styles["recipe-title"]}>{recipie.title}</div>
                <img
                    className={styles["recipe-image"]}
                    src="https://publish.purewow.net/wp-content/uploads/sites/2/2019/09/spicy-lemon-ginger-chicken-soup-recipe.jpg?resize=728%2C921"
                    alt="Spicy Lemon-Ginger Chicken Soup"
                />
                <div className={styles["recipe-description"]}>
                    {recipie.description}
                </div>
                <div className={styles["recipe-time"]}>
                    <p>
                        <strong>Prep Time:</strong> {recipie.prepTime} minutes
                    </p>
                    <p>
                        <strong>Cook Time:</strong> {recipie.cookTime} minutes
                    </p>
                    <p>
                        <strong>Total Time:</strong> {recipie.totalTime} minutes
                    </p>
                    <p>
                        <strong>Serving Portions:</strong> Serves {recipie.serves}
                    </p>
                </div>
                <div className={styles["recipe-ingredients"]}>
                    <h2>Ingredients:</h2>

                    <p>{recipie.ingredients}</p>
                </div>
                <div className={styles["recipe-directions"]}>
                    <h2>Directions:</h2>
                    <p> {recipie.directions}
                    </p>
                </div>
                <div className={styles["buttons-div"]}>
                    <button className={styles["edit-delete-button"]} type="submit">Edit</button>
                    <button className={styles["edit-delete-button"]} type="submit">Delete</button>
                </div>
            </div>
        </div>
    );

}