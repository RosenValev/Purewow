import { Link } from 'react-router-dom';
import { generateDescriptionSnippet } from '../../utils/generageDescriptionSnippet.js'

import styles from './RecipieListItem.module.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function RecipieListItem({
    _id,
    imageUrl,
    description,
    title
}) {

    return (
        <Card className={styles.card} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{title} </Card.Title>
                <Card.Text style={{ paddingBottom: "0.8rem", textAlign: "justify" }}>
                    {generateDescriptionSnippet(description, 175)}
                </Card.Text>
                <Button as={Link} to={`/recipies/${_id}`} variant="primary" style={{ position: "absolute", right: "0", bottom: "0", margin: "0.3rem", }}>Details</Button>
            </Card.Body>
        </Card>
    );

}

