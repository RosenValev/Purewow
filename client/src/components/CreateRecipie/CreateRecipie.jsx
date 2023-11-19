import styles from './CreateRecipie.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as recipieApi from '../../services/recipieApi.js'


let formInitialState = {
    title: "",
    imageUrl: "",
    description: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    serves: "",
    ingredients: "",
    directions: "",
};

export default function CreateRecipie() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        let value = e.target.value;
        setFormValues(state => ({ ...state, [e.target.name]: value }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = { ...formValues, token }
        try {
            const response = await recipieApi.create(data)
            if (response.title === formValues.title) {
                console.log('new recipie created!')
                resetFormHandler();
                navigate('/recipies');
            }
            if (!response.ok) {
                setErrors(state => ({ ...state, registerError: response.message }));
            }
        } catch (err) {
            console.log("Error: " + err.message);
        }
    }

    return (
        <section className={styles["create-container"]}>
            <div className={styles["create-container-info"]}>
                <h2>Create your recipie </h2>

                {errors.registerError && (
                    <p className={styles.errorMessage} >{errors.registerError}</p>
                )}

                <form onSubmit={submitHandler}>
                    <div >
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formValues.title}
                            onChange={changeHandler}
                        />
                    </div>
                    <div >
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formValues.imageUrl}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            value={formValues.description}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="prepTime">Prep Time (minutes):</label>
                        <input
                            type="number"
                            id="prepTime"
                            name="prepTime"
                            value={formValues.prepTime}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="cookTime">Cook Time (minutes):</label>
                        <input
                            type="number"
                            id="cookTime"
                            name="cookTime"
                            value={formValues.cookTime}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="totalTime">Total Time (minutes):</label>
                        <input
                            type="number"
                            id="totalTime"
                            name="totalTime"
                            value={formValues.totalTime}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="serves">Serves:</label>
                        <input
                            type="number"
                            id="serves"
                            name="serves"
                            value={formValues.serves}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients">Ingredients:</label>
                        <textarea
                            type="text"
                            id="ingredients"
                            name="ingredients"
                            value={formValues.ingredients}
                            onChange={changeHandler}
                        />
                    </div>
                    <div >
                        <label htmlFor="directions">Directions:</label>
                        <textarea
                            id="directions"
                            name="directions"
                            type="text"
                            value={formValues.directions}
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section >
    );
}