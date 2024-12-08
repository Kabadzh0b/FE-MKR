import { Post } from "dataModels/Post";
import React from "react";
import { useLikeMutation } from "stores/mutations/likeMutation";

interface PostProps {
  post: Post;
}

export const PostComponent: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = React.useState(post.is_liked);
  const buttonClasses = `text-white px-4 py-2 rounded-lg w-20 ${
    isLiked ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
  }`;
  const { mutate: likeMutation, isPending } = useLikeMutation(setIsLiked);

  const onLike = () => {
    likeMutation({ postId: post.id, authorUsername: post.author.username, isLiked });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-gray-800">
        {post.author.username}
      </h1>
      <h2 className="font-semibold text-gray-800">{post.content}</h2>
      <button className={buttonClasses} onClick={onLike} disabled={isPending}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};
