
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AddCommentModal({
    open,
    close,
    confirmComment,
    changeHandler,
    formValues
}) {

    return (
        <>
            <Modal show={open} onHide={close}>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add comment:</Form.Label>
                            <Form.Control type="text" name="comment" value={formValues.comment} onChange={changeHandler} as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirmComment} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
