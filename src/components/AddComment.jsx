import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { COMMENTS_TOKEN } from "../commentsToken";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.movie.imdbID,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + COMMENTS_TOKEN,
          },
        },
      );
      if (response.ok) {
        alert("Comment was sent!");
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: this.props.movie.imdbID,
          },
        });
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="my-3">
        <h5>Add a comment</h5>
        <Form onSubmit={this.sendComment}>
          <div className="d-flex justify-content-center gap-3 mb-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <Form.Check
                key={value}
                inline
                type="radio"
                label={value}
                name="rate"
                value={value}
                checked={this.state.comment.rate === String(value)}
                onChange={(e) =>
                  this.setState({
                    comment: {
                      ...this.state.comment,
                      rate: e.target.value,
                    },
                  })
                }
              />
            ))}
          </div>
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Write your comment"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
