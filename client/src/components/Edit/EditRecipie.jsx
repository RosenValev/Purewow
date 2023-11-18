import styles from './EditRecipie.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as recipieApi from '../../services/recipieApi.js'

export default function EditRecipie({
}) {
    const [recipie, setRecipie] = useState({})
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        recipieApi.getOne(id)
            .then(setRecipie)
            .catch((err) => console.log(err));
    }, [])

    return (
        <section className={styles["edit-container"]}>
            <div className={styles["edit-container-info"]}>
                <h2>Edit your recipie </h2>
                <form >
                    <div >
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={recipie.title}

                        />
                    </div>
                    <div >
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            defaultValue={recipie.imageUrl}

                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            defaultValue={recipie.description}

                        />
                    </div>
                    <div>
                        <label htmlFor="prepTime">Prep Time (minutes):</label>
                        <input
                            type="number"
                            id="prepTime"
                            name="prepTime"

                        />
                    </div>
                    <div>
                        <label htmlFor="cookTime">Cook Time (minutes):</label>
                        <input
                            type="number"
                            id="cookTime"
                            name="cookTime"

                        />
                    </div>
                    <div>
                        <label htmlFor="totalTime">Total Time (minutes):</label>
                        <input
                            type="number"
                            id="totalTime"
                            name="totalTime"

                        />
                    </div>
                    <div>
                        <label htmlFor="serves">Serves:</label>
                        <input
                            type="number"
                            id="serves"
                            name="serves"

                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients">Ingredients:</label>
                        <textarea
                            type="text"
                            id="ingredients"
                            name="ingredients"

                        />
                    </div>
                    <div >
                        <label htmlFor="directions">Directions:</label>
                        <textarea
                            id="directions"
                            name="directions"
                            type="text"

                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </section >
    );
}