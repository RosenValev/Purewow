import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/authContext.jsx'
import RecipieListItem from '../RecipieListItem/RecipieListItem.jsx'
import * as userApi from '../../services/userApi.js'
import styles from './MyProfile.module.css'


export default function MyProfile() {
    const { loggedUser } = useAuth()
    const [recipies, setRecipies] = useState([])

    useEffect(() => {
        userApi.getOne(loggedUser._id)
            .then(setRecipies)
            .catch(err => console.log(err))

    }, [])

    return (
        <section className={styles["my-profile"]}>
            <div className={styles["my-container"]}>

                {recipies.length ? (
                    <>
                        <h3>List of my own recipies...</h3>
                        <div className={styles["my-recipies"]}>
                            {recipies.map(recipie =>
                                <RecipieListItem key={recipie._id} {...recipie} />
                            )}
                        </div>
                    </>
                ) : (
                    <div className={styles["no-posts"]}>
                        <h3>There are no own recipies yet...</h3>
                    </div>
                )}

            </div>
        </section>
    );
}