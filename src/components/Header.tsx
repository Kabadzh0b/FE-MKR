import React, { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthStore } from "stores/stores/authStore";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { isLoggedIn, username } = useAuthStore();
  const [, setSearchParams] = useSearchParams();
  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchParams({ username: inputValue });
  };
  return (
    <>
      {isLoggedIn && (
        <div className="flex pt-5 pb-5 bg-blue-500 items-center justify-center relative">
          <div className="absolute left-4 flex flex-row">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search by username"
            />
            <button
              type="submit"
              className="text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg p-4 mr-4"
              onClick={onSubmit}
            >
              Search
            </button>
          </div>
          <div className="text-xl font-semibold text-white">
            {username} posts
          </div>
          <button className="absolute right-4 ml-auto text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg p-4 mr-4">
            Logout
          </button>
        </div>
      )}
      ;
    </>
  );
};
