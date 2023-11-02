import React from "react";
import "./News_styles.css";
import Add_button from "./UI/AddButton/Add_button";
import { useNavigate, useParams } from "react-router-dom";

function News({ number, post, remove }) {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const deleateCurrentPost = () => remove(id);

  const handleMoreButton = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="news">
      <div className="news__header">
        <h2>
          <span>{number}. </span>
          {title}
        </h2>
        <p>{body}</p>
      </div>
      <div className="news__footer">
        <Add_button onClick={handleMoreButton}>More...</Add_button>
        <Add_button onClick={deleateCurrentPost}>Deleate post</Add_button>
      </div>
    </div>
  );
}

export default News;
