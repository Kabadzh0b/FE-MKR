import { PostComponent } from "modules/posts/Post";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { usePostsQuery } from "stores/queries/usePostsQuery";
import { useAuthStore } from "stores/stores/authStore";

export const Posts = () => {
  const [searchParams] = useSearchParams();
  const searchUsername = searchParams.get("username");
  const { username } = useAuthStore();
  const { data, isLoading, isError } = usePostsQuery(
    searchUsername || username
  );
  return (
    <div className="flex flex-col bg-gray-300 gap-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>No user found</p>}
      {data?.length === 0 && <p>No posts found</p>}
      {data?.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
