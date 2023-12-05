import { Link } from 'react-router-dom'

import styles from './404.module.css'

export default function PageNotFound() {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src="../../public/images/404.png"
                alt="404 Not Found"
            />
            <p><Link to={'/'} className={styles.paragraph}>Go back to Home page</Link></p>
        </div>
    );
}