import React, { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNewPostMutation } from "stores/mutations/newPostMutation";
import { usePostsQuery } from "stores/queries/usePostsQuery";
import { useAuthStore } from "stores/stores/authStore";

export const Header = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { isLoggedIn, username, logout } = useAuthStore();
  const [, setSearchParams] = useSearchParams();
  const { refetch } = usePostsQuery(username);
  const { mutate: newPostMutation } = useNewPostMutation(refetch);
  const onSearchSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchParams({ username: inputValue });
    setInputValue("");
  };
  const onPostSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchParams({ username });
    newPostMutation({ content: inputValue });
    setInputValue("");
    setIsPosting(false);
  };
  return (
    <>
      {isLoggedIn && (
        <div className="flex pt-5 pb-5 bg-blue-500 items-center justify-center relative">
          <div className="absolute left-4 flex flex-row gap-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder={isPosting ? "Post content" : "Search by username"}
            />
            <button
              type="submit"
              className="text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg p-4"
              onClick={isPosting ? onPostSubmit : onSearchSubmit}
            >
              {isPosting ? "Post" : "Search"}
            </button>
            <button
              onClick={() => setIsPosting((prev) => !prev)}
              className="flex text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg"
            >
              Switch to {isPosting ? "Search" : "Post"} mode
            </button>
          </div>
          <div className="text-xl font-semibold text-white">
            {username} posts
          </div>
          <button
            onClick={logout}
            className="absolute right-4 ml-auto text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg p-4 mr-4"
          >
            Logout
          </button>
        </div>
      )}
      ;
    </>
  );
};
