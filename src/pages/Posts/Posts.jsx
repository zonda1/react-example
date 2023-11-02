import React, { useEffect, useState } from "react";
import { useSortedAndFilteredPosts } from '../../components/hooks/usePost';
import { useFetching } from '../../components/hooks/useFetching';
import PostsClass from '../../components/API/fetchPosts/PostsClass';
import { getPageCount } from '../../utils/utils';
import Modal from '../../components/Modal/Modal';
import FormNews from '../../components/FormNews';
import PostFilter from '../../components/PostFilter';
import AddButton from '../../components/UI/AddButton/Add_button';
import NewsList from '../../components/NewsList';
import Pagination from '../../components/UI/Pagination/Pagination';


export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState({ query: "", sort: "" });
  const [modal, setModal] = useState(false);

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
    setPosts(res.data);
  });

  useEffect(() => {
    fetchPosts();
  }, [pageValue]);

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
      <hr style={{ marginBottom: "10px", border: "2px solid #000" }}></hr>
      {postError && <h2>Data error: {postError}</h2>}
      {postLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NewsList
          remove={dealeateTopic}
          posts={sortedAndFilteredTopics}
        ></NewsList>
      )}
      <Pagination
        page={pageValue}
        total={totalPages}
        onClick={handlePageClick}
      />
    </div>
  );
};
