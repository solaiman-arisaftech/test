/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/posts/postSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <div className="font-bold text-4xl">
        Data fetching App Using Redux-Toolkit{" "}
      </div>
      <div className="font-semibold text-2xl">Post View </div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post: any) => {
          return (
            <article>
              <h5>{post.title} </h5>
              <h5>{post.body} </h5>
            </article>
          );
        })}
    </div>
  );
};

export default PostsView;
