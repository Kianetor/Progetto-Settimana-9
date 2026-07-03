import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center gap-2">
      <Badge bg="info" pill>
        {comment.rate}
      </Badge>
      {comment.comment}
    </ListGroup.Item>
  );
};

export default SingleComment;
