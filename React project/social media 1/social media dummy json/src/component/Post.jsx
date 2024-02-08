import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiFillDelete onClick={() => deletePost(post.id)}></AiFillDelete>
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tags) => (
            <span className="badge text-bg-primary hashtag" key={tags}>
              {tags}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Post;
