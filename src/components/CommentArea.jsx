import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { COMMENTS_TOKEN } from "../commentsToken";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.movie.imdbID,
        {
          headers: {
            Authorization: "Bearer " + COMMENTS_TOKEN,
          },
        },
      );
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && (
          <Spinner animation="border" variant="dark" className="mt-2" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Error - Did you use your auth headers?</Alert>
        )}
        <CommentList commentsToShow={this.state.comments} />
        <AddComment movie={this.props.movie} />
      </div>
    );
  }
}

export default CommentArea;
