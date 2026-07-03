import Modal from "react-bootstrap/Modal";
import CommentArea from "./CommentArea";

function MovieModal({ movie, onClose }) {
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Movie comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CommentArea movie={movie} />
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
