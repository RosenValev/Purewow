
import styles from './Comment.module.css'

export default function Comment({
    username,
    comment
}) {

    return (
        <>
            <li className={styles.comment}>
                <p>{username}: {comment} </p>
            </li>
        </>
    );
}