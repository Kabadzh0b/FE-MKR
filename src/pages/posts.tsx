import React from "react";
import { usePostsQuery } from "stores/queries/usePostsQuery";

export const Posts = () => {
  console.log("posts");
  const { data, isLoading } = usePostsQuery();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.author.full_name}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
