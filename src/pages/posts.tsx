import { PostComponent } from "modules/posts/Post";
import React from "react";
import { usePostsQuery } from "stores/queries/usePostsQuery";

export const Posts = () => {
  console.log("posts");
  const { data, isLoading } = usePostsQuery();
  console.log("data: ", data);
  return (
    <div className="flex flex-col gap-4">
      {isLoading && <p>Loading...</p>}
      {data?.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
