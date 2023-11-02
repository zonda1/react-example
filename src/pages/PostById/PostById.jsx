import React from "react";
import { useFetching } from "../../components/hooks/useFetching";
import PostsClass from "../../components/API/fetchPosts/PostsClass";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostById = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const [fetchPostById, postLoading] = useFetching(async () => {
    const res = await PostsClass.getPostById(id);
    setPost(res.data);
  });
  const [fetchCommentsById, commentsLoading] = useFetching(async () => {
    const res = await PostsClass.getCommentsById(id);
    setComments(res.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <div>
      {postLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{post?.title}</h2>
          <p style={{ marginTop: "15px" }}>{post?.body}</p>
        </>
      )}
      {commentsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {comments?.map(({ name, email, body }, index) => {
            return (
              <div className="comments">
                <div className="user__info">
                  <span>{index + 1}. </span>
                  <div className="user__name">
                    <h3>Name:</h3>
                    <span>{name}</span>
                  </div>
                  <div className="user__email">
                    <h4>Email:</h4>
                    <span>{email}</span>
                  </div>
                </div>
                <div className="user__comment">{body}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PostById;
