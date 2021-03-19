import React, { Component } from "react";
import blog from "../api/Blog";

class Details extends Component {
  state = { loading: true };
  componentDidMount() {
    console.log(this.props.id);
    blog.get(this.props.id).then(({ photo }) => {
      this.setState({
        author: photo.author,
        title: photo.title,
        caption: photo.caption,
        desc: photo.description,
        imgName: photo.name,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) return <h1>Loading ...</h1>;
    const { author, title, caption, desc, imgName } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12">
          <h1>{title}</h1>

          <p className="lead">{author == null ? "Anonymous" : author}</p>

          <hr />

          <p>
            <span className="glyphicon glyphicon-time"></span> Posted on August
            24, 2030 at 9:00 PM
          </p>

          <hr />

          <img className="img-responsive" src={imgName} alt={caption} />

          <hr />

          <p className="lead">{desc}</p>

          <hr />

          <div className="well">
            <h4>Leave a Comment:</h4>
            <form>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" className="form-control" />
              </div>
              <div className="form-group">
                <textarea
                  name="body"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" name="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Details;
