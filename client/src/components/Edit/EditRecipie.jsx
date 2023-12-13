import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { validateRecipieData } from '../../utils/validationForm.js';

import styles from './EditRecipie.module.css'
import * as recipieApi from '../../services/recipieApi.js'
import AuthContext from '../../contexts/authContext.jsx';

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

export default function EditRecipie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [recipie, setRecipie] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        recipieApi.getOne(id)
            .then(result => {
                if (result.message) {
                    return navigate('/404');
                }
                setRecipie(result);
            })
            .catch((err) => console.log(err));
    }, [id])

    const isAuthor = userId === recipie.owner?._id;

    if (!isAuthor) {
        return navigate('/');
    }

    const onChangeHandler = (e) => {
        setRecipie(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            setErrors({});
            const validationErrors = validateRecipieData(recipie);

            if (Object.keys(validationErrors).length > 0) {
                return setErrors(state => ({ ...state, validationErrors }));
            }

            const response = await recipieApi.updateOne(id, recipie)
            if (response.title === recipie.title) {
                setRecipie(formInitialState);
                setErrors({});
                navigate(-1);
            }
            if (!response.ok) {
                setErrors(state => ({ ...state, registerError: response.message }));
            }
        } catch (err) {
            console.log("Error: " + err.message);
        }
    }

    return (
        <section className={styles["edit-container"]}>
            <div className={styles["edit-container-info"]}>
                <h2>Edit your recipie </h2>

                {errors.registerError && (
                    <p className={styles.errorMessage} >{errors.registerError}</p>
                )}

                <form onSubmit={onSubmitForm}>
                    <div >
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={recipie.title}
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
                            value={recipie.imageUrl}
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
                            value={recipie.description}
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
                            value={recipie.prepTime}
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
                            value={recipie.cookTime}
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
                            value={recipie.totalTime}
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
                            value={recipie.serves}
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
                            value={recipie.ingredients}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.ingredients && (
                        <p className={styles.errorMessage} >{errors.validationErrors.ingredients}</p>
                    )}
                    <div >
                        <label htmlFor="directions">Directions:</label>
                        <textarea
                            type="text"
                            id="directions"
                            name="directions"
                            value={recipie.directions}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {errors.validationErrors?.directions && (
                        <p className={styles.errorMessage} >{errors.validationErrors.directions}</p>
                    )}
                    <button type="submit">Save</button>
                </form>
            </div>
        </section >
    )
};