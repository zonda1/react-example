import React, { useEffect, useRef, useState } from "react";
import { useSortedAndFilteredPosts } from "../../components/hooks/usePost";
import { useFetching } from "../../components/hooks/useFetching";
import PostsClass from "../../components/API/fetchPosts/PostsClass";
import { getPageCount } from "../../utils/utils";
import Modal from "../../components/Modal/Modal";
import FormNews from "../../components/FormNews";
import PostFilter from "../../components/PostFilter";
import AddButton from "../../components/UI/AddButton/Add_button";
import NewsList from "../../components/NewsList";
import Pagination from "../../components/UI/Pagination/Pagination";
import { useObserver } from "../../components/hooks/useObserver";
import MySorting from "../../components/UI/Sorting/MySorting";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState({ query: "", sort: "" });
  const [modal, setModal] = useState(false);

  const lastElement = useRef();

  //for pagination
  const [totalPages, setTotalPages] = useState(0);

  const [postsLimit, setPostsLimit] = useState(10);
  const [pageValue, setPageValue] = useState(1);

  const sortedAndFilteredTopics = useSortedAndFilteredPosts(
    posts,
    filterPost.sort,
    filterPost.query
  );

  const addTopic = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const dealeateTopic = (postId) =>
    setPosts(posts.filter((p) => postId !== p.id));

  const [fetchPosts, postLoading, postError] = useFetching(async () => {
    const res = await PostsClass.getAll(postsLimit, pageValue);
    const totalPosts = res.headers["x-total-count"];
    setTotalPages(getPageCount(totalPosts, postsLimit));
    // setPosts([...posts, ...res.data]);
    setPosts(res.data);
  });

  // useObserver(
  //   postLoading,
  //   pageValue < totalPages,
  //   () => setPageValue(pageValue + 1),
  //   lastElement
  // );

  useEffect(() => {
    fetchPosts();
  }, [pageValue,postsLimit]);

  const handlePageClick = (page) => {
    setPageValue(page);
  };

  return (
    <div className="App">
      <h1>Newspaper</h1>

      <AddButton
        style={{ marginBottom: "15px" }}
        onClick={() => setModal(true)}
      >
        Add new post
      </AddButton>
      <Modal visible={modal} setVisible={setModal}>
        <FormNews func={addTopic}></FormNews>
      </Modal>

      <PostFilter filter={filterPost} setFilter={setFilterPost}></PostFilter>
      <MySorting
        value={postsLimit}
        onChange={(value) => setPostsLimit(value)}
        deafaultValue={"Выберите кол-во постов для показа"}
        options={[
          { name: "5", value: 5 },
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "Показать все", value: -1 },
        ]}
      />
      <hr style={{ marginBottom: "10px", border: "2px solid #000" }}></hr>
      {postError && <h2>Data error: {postError}</h2>}
      <NewsList remove={dealeateTopic} posts={sortedAndFilteredTopics} />
      {postLoading && <h2>Loading...</h2>}
      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "red" }}
      ></div>
      <Pagination
        page={pageValue}
        total={totalPages}
        onClick={handlePageClick}
      />
    </div>
  );
};
