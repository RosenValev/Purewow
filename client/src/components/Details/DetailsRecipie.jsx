import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as recipieApi from '../../services/recipieApi.js'
import styles from './DetailsRecipie.module.css'
import { Link } from 'react-router-dom'
import DeleteRecipieModal from '../DeleteRecipieModal/DeleteRecipieModal.jsx';

export default function DetailsRecipie() {
    const { id } = useParams();
    const [recipie, setRecepie] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        recipieApi.getOne(id)
            .then(setRecepie)
            .catch((err) => {
                console.log(err)
                navigate('/recipies');
            });
    }, [id]);

    const handleClickDelete = () => {
        setShowDeleteModal(true)
    }
    const handleCloseDelete = () => {
        setShowDeleteModal(false)
    }

    const deleteRecipieHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await recipieApi.deleteOne(id)
            navigate('/recipies');
        } catch (err) {
            console.log("Error: " + err.message)
        }
    }


    return (
        <>  {showDeleteModal && <DeleteRecipieModal
            open={handleClickDelete}
            close={handleCloseDelete}
            confirmDelete={deleteRecipieHandler}
        />}

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
                        <Link to={`/recipies/edit/${id}`} className={styles["edit-delete-button"]} type="submit">Edit</Link>
                        <button className={styles["edit-delete-button"]} onClick={handleClickDelete} type="button">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}