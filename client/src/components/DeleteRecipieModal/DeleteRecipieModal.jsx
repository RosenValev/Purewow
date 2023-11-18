import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './DeleteRecipieModal.module.css'

export default function DeleteRecipieModal({
    open,
    close,
    confirmDelete,
}) {

    return (
        <>
            <Modal show={open} >
                <Modal.Body className={styles.body}>Are you sure you want to delete this recipie?</Modal.Body>
                <Modal.Footer className={styles.footerr}>
                    <Button variant="secondary" className={styles.buttons} onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" className={styles.buttons} onClick={confirmDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}