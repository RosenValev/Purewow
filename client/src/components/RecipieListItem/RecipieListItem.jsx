import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from './RecipieListItem.module.css'

export default function RecipieListItem({
    _id,
    imageUrl,
    description,
    title
}) {

    return (
        <Card className={styles.card} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button as={Link} to={`/recipies/${_id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );

}

