import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './DetailsRecipie.module.css'
const baseURL = "http://localhost:3000/recipies"

export default function DetailsRecipie() {
    const { id } = useParams();
    const [recipie, setRecepie] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseURL}/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }
                return res.json();
            })
            .then(setRecepie)
            .catch((err) => {
                navigate('/recipies');
            });
    }, [id]);


    return (
        <div className={styles['recipie-container']}>
            <div className={styles["recipe-details"]}>
                <div className={styles["recipe-title"]}>{recipie.title}</div>
                <img
                    className={styles["recipe-image"]}
                    src={recipie.imageUrl}
                    alt={recipie.title}
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
                    <p> {recipie.directions}</p>
                </div>
                <div className={styles["buttons-div"]}>
                    <button className={styles["edit-delete-button"]} type="submit">Edit</button>
                    <button className={styles["edit-delete-button"]} type="submit">Delete</button>
                </div>
            </div>
        </div>
    );
}