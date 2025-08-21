import { useState } from "react";
import usePosts from "../starter-hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
