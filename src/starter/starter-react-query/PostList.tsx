import { useState } from "react";
import usePosts from "../starter-hooks/usePosts";
import React from "react";

const PostList = () => {
  //use in useQuery , infinite query does not have pagination
  // const pageSize = 10;
  // const [page, setPage] = useState(1);
  //const { data, isLoading, error } = usePosts({ page, pageSize });

  //using infiniteQuery
  const pageSize = 10;
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {/* <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button> //only for useQuery */}
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
