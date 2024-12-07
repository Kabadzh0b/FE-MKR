import { PostComponent } from "modules/posts/Post";
import React from "react";
import { usePostsQuery } from "stores/queries/usePostsQuery";

export const Posts = () => {
  const { data, isLoading } = usePostsQuery();
  return (
    <div className="flex flex-col bg-gray-300 gap-4">
      {isLoading && <p>Loading...</p>}
      {data?.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
