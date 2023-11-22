import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js';

import * as recipieApi from '../../services/recipieApi.js'
import styles from './DetailsRecipie.module.css'

import DeleteRecipieModal from '../DeleteRecipieModal/DeleteRecipieModal.jsx';
import AuthContext from '../../contexts/authContext.jsx';
import AddCommentModal from '../AddCommentModal/AddCommentModal.jsx';

export default function DetailsRecipie() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipie, setRecepie] = useState({});
    const { userId, username, isAuthenticated } = useContext(AuthContext);
    const { formValues, setFormValues, onChangeHandler } = useForm({ comment: "" });
    const [comments, setComments] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddCommentModal, setShowAddCommentModal] = useState(false);

    useEffect(() => {
        recipieApi.getOne(id)
            .then(result => {
                setRecepie(result);
                setComments(result.commentList)
            })
            .catch((err) => {
                console.log(err);
                navigate('/recipies');
            });
    }, [id]);

    console.log(comments)

    const isAuthor = userId == recipie.owner?._id;

    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
    }

    const handleShowAddCommentModal = () => {
        setShowAddCommentModal(true);
    }

    const handleCloseModal = () => {
        setShowDeleteModal(false);
        setShowAddCommentModal(false);
    }

    const deleteRecipieHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await recipieApi.deleteOne(id);
            navigate('/recipies');
        } catch (err) {
            console.log("Error: " + err.message);
        }
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        if (formValues.comment !== "") {
            recipieApi.addCommentToRecipie(id, { username, comment: formValues.comment })
                .then(result => {
                    if (result.success) {
                        setComments(result.success.commentList)
                        setFormValues({ comment: "" });
                        handleCloseModal();
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>  {showDeleteModal &&
            <DeleteRecipieModal
                open={showDeleteModal}
                close={handleCloseModal}
                confirmDelete={deleteRecipieHandler}
            />}

            {showAddCommentModal &&
                <AddCommentModal
                    open={showAddCommentModal}
                    close={handleCloseModal}
                    confirmComment={addCommentHandler}
                    changeHandler={onChangeHandler}
                    formValues={formValues}
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

                        {isAuthenticated &&
                            <>
                                {isAuthor ? (
                                    <>
                                        <Link to={`/recipies/edit/${id}`} className={styles["edit-delete-button"]} type="submit">Edit</Link>
                                        <button className={styles["edit-delete-button"]} onClick={handleShowDeleteModal} type="button">Delete</button>
                                    </>
                                ) : (
                                    < button className={styles["comment-button"]} onClick={handleShowAddCommentModal} type="button">Add comment</button>
                                )}
                            </>
                        }

                    </div>

                    <div className="details-comments">
                        <h3>Comments are placed here!</h3>

                    </div>
                </div>
            </div>
        </>
    );
}