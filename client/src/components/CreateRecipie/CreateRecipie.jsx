import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js'
import { validateRecipieData } from '../../utils/validationForm.js'

import * as recipieApi from '../../services/recipieApi.js'
import styles from './CreateRecipie.module.css'

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
    const { formValues, setFormValues, onChangeHandler } = useForm(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = { ...formValues, token };
        try {
            setErrors({});
            const validationErrors = validateRecipieData(formValues)

            if (Object.keys(validationErrors).length > 0) {
                return setErrors(state => ({ ...state, validationErrors }));
            }

            const response = await recipieApi.create(data)
            if (response.title === formValues.title) {
                console.log('new recipie created!');
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
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.title && (
                        <p className={styles.errorMessage} >{errors.validationErrors.title}</p>
                    )}
                    <div >
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formValues.imageUrl}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.imageUrl && (
                        <p className={styles.errorMessage} >{errors.validationErrors.imageUrl}</p>
                    )}
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            value={formValues.description}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.description && (
                        <p className={styles.errorMessage} >{errors.validationErrors.description}</p>
                    )}
                    <div>
                        <label htmlFor="prepTime">Prep Time (minutes):</label>
                        <input
                            type="number"
                            id="prepTime"
                            name="prepTime"
                            value={formValues.prepTime}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.prepTime && (
                        <p className={styles.errorMessage} >{errors.validationErrors.prepTime}</p>
                    )}
                    <div>
                        <label htmlFor="cookTime">Cook Time (minutes):</label>
                        <input
                            type="number"
                            id="cookTime"
                            name="cookTime"
                            value={formValues.cookTime}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.cookTime && (
                        <p className={styles.errorMessage} >{errors.validationErrors.cookTime}</p>
                    )}
                    <div>
                        <label htmlFor="totalTime">Total Time (minutes):</label>
                        <input
                            type="number"
                            id="totalTime"
                            name="totalTime"
                            value={formValues.totalTime}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.totalTime && (
                        <p className={styles.errorMessage} >{errors.validationErrors.totalTime}</p>
                    )}
                    <div>
                        <label htmlFor="serves">Serves:</label>
                        <input
                            type="number"
                            id="serves"
                            name="serves"
                            value={formValues.serves}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.serves && (
                        <p className={styles.errorMessage} >{errors.validationErrors.serves}</p>
                    )}
                    <div>
                        <label htmlFor="ingredients">Ingredients:</label>
                        <textarea
                            type="text"
                            id="ingredients"
                            name="ingredients"
                            value={formValues.ingredients}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.ingredients && (
                        <p className={styles.errorMessage} >{errors.validationErrors.ingredients}</p>
                    )}
                    <div >
                        <label htmlFor="directions">Directions:</label>
                        <textarea
                            id="directions"
                            name="directions"
                            type="text"
                            value={formValues.directions}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.directions && (
                        <p className={styles.errorMessage} >{errors.validationErrors.directions}</p>
                    )}
                    <button type="submit">Create</button>
                </form>
            </div>
        </section >
    );
}