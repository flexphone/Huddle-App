import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import services from "../../services";

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload => dispatch({ type: "DELETE_ARTICLE", payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(services.Articles.delete(article.slug));
  };
  if (props.canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn blue"
        >
          <i className="ion-edit" /> Edit Article
        </Link>
        <br />
        <br />

        <button className="btn blue" onClick={del}>Delete Article</button>

        {/* <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a" /> Delete Article
        </button> */}
      </span>
    );
  }

  return <span />;
};

export default connect(null, mapDispatchToProps)(ArticleActions);
